import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import { globalstyle } from '../globalStylsheet';
function DashboardScreen() {
    return ( 
    <>
        <Image source={require('../assets/images/third-bg.png')} style={globalstyle.defaultBackground}  />

        <Text>Dashboard</Text>
    
    </>  );
}

export default DashboardScreen;