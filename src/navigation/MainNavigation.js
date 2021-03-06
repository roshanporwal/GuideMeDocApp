import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../screens';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function MainNavigation(props) {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPageOne">
            {screens.map(scr => {
            return (
                <Stack.Screen
                key={scr.name}
                name={scr.name}
                component={scr.component}
                options={scr.options}
                />
            );
            })}
        </Stack.Navigator>
      </NavigationContainer>
  );
}
