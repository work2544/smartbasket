import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
  SectionList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';

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
  useEffect(() => {
    getTotal(product);
  }, [product]);
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
    console.log('run getottal');
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
  const RenderProduct = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          width: '95%',
          height: 150,
          marginVertical: 7,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '40%',
            height: '100%',
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image style={styles.logo} source={{uri: data[2]}} />
        </View>
        <View style={{height: '100%', flex: 1, justifyContent: 'space-around'}}>
          <View>
            <Text style={styles.textName}>{data[0]}</Text>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.CurPrice}>
                ฿{data[1].finalPrice.value}&nbsp;&nbsp;
              </Text>
              {parseInt(data[1].finalPrice.value)!==parseInt(data[1].regularPrice.value)?<Text style={styles.oldPrice}>{data[1].regularPrice.value}</Text>:null}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 100,
              marginRight: 10,
              padding: 4,
              borderWidth: 1,
              opacity: 0.5,
              justifyContent: 'space-between',
              width: '45%',
            }}>
            <Ionicons
              name="remove-circle-outline"
              style={styles.icontext}></Ionicons>
            <Text style={{color: 'black', fontSize: 20}}>&nbsp;1&nbsp;</Text>
            <Ionicons
              name="add-circle-outline"
              style={styles.icontext}></Ionicons>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right','bottom']}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          flexShrink: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
        }}>
        <Text style={styles.totaltext}>Total : {total}</Text>

        <CustomButton onPress={() => {}} text="PAY" type="PAY"></CustomButton>
      </View>

      <ScrollView>
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
          <View>{product ? product.map(RenderProduct) : null}</View>
        </View>
      </ScrollView>
      <View
        styles={{
          flexDirection: 'row',
          alignContent: 'space-between',
          flex: 1,
        }}></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mycartstyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 10,
  },
  logo: {
    height: '100%',
    width: '50%',
    alignSelf: 'flex-start',
    resizeMode: 'contain',
  },
  textName: {
    color: 'black',
    fontSize: 20,
    maxWidth: '100%',
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'red',
    fontSize: 20,
  },
  CurPrice: {
    color: 'green',
    fontSize: 20,
  },
  icontext: {
    fontSize: 32,
    color: 'black',
  },
  totaltext: {
    flexWrap: 'wrap',
    color: 'black',
    fontSize: 19,
    alignSelf: 'center',
    marginRight: 50,
  },
});
export default CartScreen;
