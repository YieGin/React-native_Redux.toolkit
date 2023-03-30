import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, clear, deleteFromCart, less} from '../redux/CartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((a, p) => {
    return a + p.price * p.quantity;
  }, 0);
  return (
    <View style={styles.body}>
      <View style={styles.position}>
        <Text style={styles.textCart}>
          Your total price:
          <Text style={styles.textCartPrice}> ${totalPrice.toFixed(0)}</Text>
        </Text>
      </View>
      <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              marginVertical: 10,
            }}
          />
        )}
        keyExtractor={(item, id) => id.toString()}
        data={cart}
        renderItem={({item}) => (
          <View style={styles.cartDiv}>
            <Image
              resizeMode="cover"
              source={{uri: item.image}}
              style={{width: 100, height: 100}}
            />
            <View style={{paddingLeft: 10}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.Price}>$ {item.price.toFixed(0)}</Text>
            </View>
            <View style={styles.cartquantity}>
              <Pressable
                style={styles.quantityMore}
                onPress={() => dispatch(addToCart(item))}>
                <Text style={styles.textQuanity}>+</Text>
              </Pressable>
              <View style={styles.quantityMore}>
                <Text style={styles.textQuanity}>{item.quantity}</Text>
              </View>
              <Pressable
                onPress={() => {
                  if (item.quantity > 1) {
                    dispatch(less(item));
                  }
                }}
                style={styles.quantityMore}>
                <Text style={styles.textQuanity}>-</Text>
              </Pressable>
              <Pressable
                onPress={() => dispatch(deleteFromCart(item))}
                style={{
                  width: 30,
                  height: 30,
                  position: 'absolute',
                  right: 10,
                }}>
                <Image source={require('../../assets/Images/Close.png')} />
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#f0f',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  button2: {
    backgroundColor: 'green',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTop: {
    color: '#000',
    fontSize: 35,
    textAlign: 'center',
  },
  position: {
    backgroundColor: 'white',
    height: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    width: '70%',
  },
  textCart: {
    fontSize: 25,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  textCartPrice: {
    fontSize: 25,
    fontWeight: '800',
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
  title: {
    width: 200,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    fontStyle: 'italic',
    fontFamily: 'Roboto-Thin',
    color: '#000',
  },
  cartDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },
  cartquantity: {
    flexDirection: 'column',
    paddingRight: 50,
  },
  quantityMore: {
    borderWidth: 1,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#CACACA',
  },
  textQuanity: {
    fontSize: 20,
    textAlign: 'center',
  },
  Price: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'Roboto-BoldItalic',
    width: '70%',
    color: 'orange',
    marginTop: 10,
  },
});

export default Cart;
