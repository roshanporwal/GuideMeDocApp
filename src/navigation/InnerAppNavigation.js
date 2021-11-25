import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from './inner_app_screens';

const Stack = createNativeStackNavigator();

export default function InnerAppNavigation(props) {
  return (
        <Stack.Navigator initialRouteName="DashboardScreen">
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
  );
}
