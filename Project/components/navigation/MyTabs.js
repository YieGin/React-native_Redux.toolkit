import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Cart from '../comp/Cart';
import Home from '../comp/Home';
import {View, StyleSheet, Image} from 'react-native';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.IconView}>
              <Image source={require('../../assets/Images/Home_icon.png')} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.IconView}>
              <Image source={require('../../assets/Images/cart_icon.png')} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  IconView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '100%',
    color: 'red',
  },
});

export default MyTabs;
