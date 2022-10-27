import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
// navigation components import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// icons import
import { Icon } from '@rneui/themed';
// Tab Screens
import RootScreen from './screens/RootScreen';
import StoreScreen from './screens/StoreScreen';
import WishListScreen from './screens/WishListScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import { tw } from './lib/tailwind';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        sceneContainerStyle={{ borderBottomWidth:0 }}
        screenOptions={{
          // tabBarStyle: { backgroundColor: '#262626', borderTopWidth: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden'},
          tabBarStyle: { backgroundColor: '#262626', borderTopWidth: 0 },
          tabBarHideOnKeyboard: true
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={RootScreen} 
          options={{ 
            headerShown: false, 
            tabBarShowLabel: false, 
            tabBarIcon: ({ focused, color, size }) => (<View>
              <Icon
                style={tw``}
                name='home'
                type='ionicon'
                color={`${focused ? '#fb923c' : 'white'}`}
                size={18}
              />
            </View>)
          }} 
        />
        <Tab.Screen 
          name="Store" 
          component={StoreScreen} 
          options={{ 
            headerShown: false, tabBarShowLabel: false, 
            tabBarIcon: ({ focused, color, size }) => (<View>
              <Icon
                style={tw``}
                name='shopping-bag'
                type='entypo'
                color={`${focused ? '#fb923c' : 'white'}`}
                size={18}
              />
            </View>)
          }}
        />
        <Tab.Screen 
          name="Wishlist" 
          component={WishListScreen} 
          options={{ headerShown: false, tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => (<View>
              <Icon
                style={tw``}
                name='heart'
                type='font-awesome'
                color={`${focused ? '#fb923c' : 'white'}`}
                size={18}
              />
            </View>) 
          }} 
        />
        <Tab.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
          options={{ headerShown: false, tabBarShowLabel: false, 
            tabBarIcon: ({ focused, color, size }) => (<View>
              <Icon
                style={tw``}
                name='bell'
                type='font-awesome'
                color={`${focused ? '#fb923c' : 'white'}`}
                size={18}
              />
            </View>) 
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

