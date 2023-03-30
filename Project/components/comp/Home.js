import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getUsers} from '../redux/userSlice';
import {addToCart} from '../redux/CartSlice';
import Heart from '../../assets/svgs/Heart.svg';

export default function Home() {
  const {title} = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <View style={styles.body}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          height: '100%',
        }}>
        <FlatList
          keyExtractor={(item, id) => id.toString()}
          data={title}
          renderItem={({item}) => (
            <View style={styles.flatList}>
              <View style={styles.View_cart}>
                <View style={{width: '100%'}}>
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      height: 180,
                    }}>
                    <Image
                      source={{uri: item.image}}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: 180,
                        marginLeft: 5,
                        borderRadius: 30,
                      }}
                    />
                  </View>
                  <View style={{width: '100%'}}>
                    <Text style={styles.text}>{item.title}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 5,
                      }}>
                      <View
                        style={{
                          backgroundColor: 'green',
                          width: 10,
                          height: 10,
                          borderRadius: 100,
                        }}></View>
                      <Text style={{color: 'green'}}>Available</Text>
                    </View>
                    <Text style={styles.Price}>${item.price.toFixed(0)}</Text>
                    <Pressable
                      onPress={() => dispatch(addToCart(item))}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 35,
                        width: 40,
                        height: 40,
                        cursor: 'pointer',
                        borderRadius: 100,
                      }}>
                      <Heart fill={'red'} />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
  },
  flatList: {
    paddingLeft: 10,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  View_cart: {
    paddingTop: 10,
    borderRadius: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button2: {
    backgroundColor: 'green',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    paddingBottom: 8,
    paddingTop: 10,
    color: '#3b3846',
    width: '90%',
    lineHeight: 20,
    fontFamily: 'Roboto-Medium',
    textAlign: 'justify',
  },
  Price: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: '400',
  },
  text_button: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Roboto-Black',
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    backgroundColor: '#d5d5d5',
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 20,
    height: 40,
    width: '90%',
  },
});
