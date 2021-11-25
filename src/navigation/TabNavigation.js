import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import { Image, View } from 'react-native';
import InnerAppNavigation from './InnerAppNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen 
            name="InnerAppNavigation" 
            component={InnerAppNavigation} //For navigating in in the dasboard screens
            options={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ padding:2,borderBottomWidth:1,borderColor: focused ? '#1a4981':'white' }}>
                        <Image source={require('../assets/images/icons/home.png')} />
                    </View>
                )
            }}
        />
        <Tab.Screen name="MessageScreen" 
            component={DashboardScreen} 
            options={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ padding:2,borderBottomWidth:1,borderColor: focused ? '#1a4981':'white' }}>
                        <Image source={require('../assets/images/icons/msg.png')} />
                    </View>
                )
            }}
        />
        <Tab.Screen name="DoctorScreen" 
            component={DashboardScreen} 
            options={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ padding:2,borderBottomWidth:1,borderColor: focused ? '#1a4981':'white' }}>
                        <Image source={require('../assets/images/icons/doctor.png')} />
                    </View>
                )
            }}
        />
      </Tab.Navigator>
  );
}