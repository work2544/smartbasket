import {View, Text,Image,StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({navigation, route}) => {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
 // const [totaldiscount, setTotalDiscount] = useState();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProduct();
    });
    return unsubscribe;
  }, [navigation]);
  useEffect(()=>{
    getTotal(product)
  },[product]
  )
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
    console.log("run getottal")
    let curtotal = 0;
    if (product) {
      for (let index = 0; index < productData.length; index++) {
        const element = productData[index];
        const FinalPrice = element[1].finalPrice?.value;
        curtotal += FinalPrice;
      }
      setTotal(curtotal);
    }
  };
  const RenderProduct=((data,index)=>{
   
    return (
      <View key={index}>
        <Text style={{color:'black',fontSize:10}}>{data[0]}</Text>
         <Image
          style={styles.logo}
          source={{uri:data[2]}}
        />
        <Text style={{color:'black',fontSize:10}}>{data[1].regularPrice.value}</Text> 
        <Text style={{color:'red',fontSize:10}}>{data[1].discount.amountOff}</Text> 
        <Text style={{color:'green',fontSize:10}}>{data[1].finalPrice.value}</Text> 
      </View>
    
    );
      })

  return (
    <View>
      {product?product.map(RenderProduct):null}
      {/* <Text style={{color:'black',fontSize:20}}>{totaldiscount}</Text> */}
      <Text style={{color:'black',fontSize:20}}>{total}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default CartScreen;
