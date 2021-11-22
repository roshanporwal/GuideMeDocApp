import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { globalstyle } from '../globalStylsheet';
export default function LoadingScreen(){
    return (
        <View style={[styles.loadingContainer,globalstyle.defaultThemeBgColor]}>
            <View>
                <Image source={require('../assets/images/guide-melogo.png')} />
            </View>
            <View>
                <Text style={[globalstyle.boldHeading,styles.title]}>GUIDE ME DOC</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    loadingContainer:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        color:'#fff',
        paddingVertical:5,
    }
});