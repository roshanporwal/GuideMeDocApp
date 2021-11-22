import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalstyle } from '../globalStylsheet';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
function LandingPageTwo(props){
const {navigation} = props;
    return ( 
        <>
            <View style={[globalstyle.defaultContainer,globalstyle.defaultThemeSecondaryBgColor]}>
                <Image source={require('../assets/images/white-semi.png')} style={styles.bgImage} />
                <View style={styles.pageLogo}>
                    <Image source={require('../assets/images/book-appointment.png')} style={globalstyle.defaultImage} resizeMode="contain"  />
                </View>
                <View style={styles.content}>
                    <Text style={[globalstyle.boldHeading,globalstyle.defaultThemeColor,styles.contentText]}>Book Appointments</Text>
                    <Text style={[globalstyle.normalFont,globalstyle.defaultThemeColor,{textAlign:'center'}]}>
                        Book Appointments for your treatment with our specialists in the best hospitals around you.</Text>
                    <TouchableOpacity style={[globalstyle.defaultButton,styles.button]} onPress={() => navigation.navigate('LandingPageThree')}>
                        <Text style={[globalstyle.normalFont,{color:'#fff'}]}>Next</Text>
                    </TouchableOpacity>
                    <Image source={require('../assets/images/icons/screen-2-dots.png')} style={styles.dots} />
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

export default LandingPageTwo;