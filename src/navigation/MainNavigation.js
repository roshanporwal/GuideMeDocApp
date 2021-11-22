import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screens
import screens from '../screens';

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

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
  },
});
