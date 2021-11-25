import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { globalstyle } from '../globalStylsheet';

//Component for the Title for different screens in dashboard
function InnerAppTitle(props) {
    const {title,navigation} = props;
    return ( 
        <>
        <View style={styles.TitleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrowleft" size={30} color="#1a4981" />
            </TouchableOpacity>
             <Text style={[globalstyle.boldHeading,globalstyle.defaultThemeColor,{marginLeft:60}]} >{title}</Text>
        </View>
        </>
     );
}

export default InnerAppTitle;
const styles = StyleSheet.create({
    TitleContainer:{
        paddingHorizontal:30,
        marginTop:hp('2%'),
        marginBottom:hp('1%'),
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        zIndex:999,
    }
});