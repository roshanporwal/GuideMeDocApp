import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalstyle } from '../globalStylsheet';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
function LandingPageThree(props){
    const {navigation} = props;
    return ( 
        <>
            <View style={[globalstyle.defaultContainer,globalstyle.defaultThemeSecondaryBgColor]}>
                <Image source={require('../assets/images/white-semi.png')} style={styles.bgImage} />
                <View style={styles.pageLogo}>
                    <Image source={require('../assets/images/ask-question.png')} style={globalstyle.defaultImage} resizeMode="contain" />
                </View>
                <View style={styles.content}>
                    <Text style={[globalstyle.boldHeading,globalstyle.defaultThemeColor,styles.contentText]}>Ask A Question</Text>
                    <Text style={[globalstyle.normalFont,globalstyle.defaultThemeColor,{textAlign:'center'}]}>
                        Get answers to the questions you have from our specialists.</Text>
                    <TouchableOpacity style={[globalstyle.defaultButton,styles.button]} onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={[globalstyle.normalFont,{color:'#fff'}]}>Let's Start</Text>
                    </TouchableOpacity>
                    <Image source={require('../assets/images/icons/screen-3-dots.png')} style={styles.dots} />
                </View>
            </View>
        </>
     );
}
const styles = StyleSheet.create({
    pageLogo:{
        position:'absolute',
        top:hp('15%'),
        zIndex:10,
    },
    bgImage:{
        position:'absolute',
        top:0,
        marginTop:hp('-30%'),
        zIndex:-1,
    },
    content:{
        marginTop:hp('56%'),
    },
    contentText:{
        textAlign:'center',
        marginVertical:hp('3%')
    },
    button:{
        marginTop:hp('10%')
    },
    dots:{
        alignSelf:'center',
        marginVertical:hp('2%'),
    }
});

export default LandingPageThree;