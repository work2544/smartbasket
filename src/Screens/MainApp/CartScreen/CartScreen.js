import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({navigation, route}) => {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState();
  const [totaldiscount, setTotalDiscount] = useState();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProduct();
    });
    return unsubscribe;
  }, [navigation]);
  const fetchProduct = async () => {
    console.log('call fetch');
    let items = await AsyncStorage.getItem('@cartItems');
    items = JSON.parse(items);

    let productData = [];
    if (items !== null) {
      items.map(x => {
        console.log('store items json ' + x);
        productData.push(x);
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  const getTotal = productData => {
    let curtotal = 0;
    let curdiscount = 0;
    if (product) {
      for (let index = 0; index < productData.length; index++) {
        const element = productData[index];
        const RegularPrice = element.regularPrice?.value;
        const Discount = element.discount?.amountOff;
        curtotal += RegularPrice;
        curdiscount += Discount;
      }
      setTotal(curtotal);
      setTotalDiscount(curdiscount);
    }
  };
  const RenderProduct=((data,index)=>{
    return (
      <View key={index}>
        <Text style={{color:'red',fontSize:30}}>{data}</Text>
      </View>
    );
      })
  return (
    <View>
      {product?product.map(RenderProduct):{}}
      <Text style={{color:'black',fontSize:10}}>{route.params?.barcodeNo}</Text>
    </View>
  );
};

export default CartScreen;
