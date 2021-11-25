import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
//component for the top header bar
function Header(props) {
    return (
    <>
        <View style={styles.mainBar}>
            <View style={styles.leftContent}>
                <Image source={require('../assets/images/dummy-profile.png')}  style={styles.Icon}/>
            </View>
            <View style={styles.rightContent}>
                <Image source={require('../assets/images/icons/notification.png')} style={styles.Icon} />
                <Image source={require('../assets/images/icons/search.png')} style={styles.Icon} />
            </View>
        </View>
    </>
    );
}

export default Header;
const styles = StyleSheet.create({
    mainBar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5,
        paddingVertical:15
    },
    rightContent:{
        display:'flex',
        flexDirection:'row',
        margin:10,
    },
    Icon:{
        marginHorizontal:10,
        zIndex:999
    }
});