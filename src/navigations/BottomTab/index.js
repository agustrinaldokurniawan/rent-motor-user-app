import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';

import Foundation from 'react-native-vector-icons/Foundation'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import ProfileScreen from '../../screens/profile';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: 75,
        elevation: 0,
        borderTopWidth: 0
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FF5F00',
      headerShown: false
    }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Foundation name='home' size={32} color={color} />
        }}
        component={HomeScreen} />
      <Tab.Screen
        name="Motor"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name='sports-motorsports' size={32} color={color} />
        }}
        component={ProfileScreen} />
      <Tab.Screen
        name="Store"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name='store' size={24} color={color} />
        }}
        component={ProfileScreen} />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <EvilIcons name='user' size={36} color={color} />
        }}
        component={ProfileScreen} />
    </Tab.Navigator>
  );
}