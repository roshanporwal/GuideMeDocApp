import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const globalstyle = StyleSheet.create({
    defaultContainer:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:wp('2%')
    },
    defaultBackground:{
        position:'absolute',
        height:hp('100%'),
        width:'100%',
        zIndex:-1,
    },
    backButton:{
        zIndex:999,
        position:'absolute',
        top:40,
        left:20,
        display:'flex',
        flexDirection:'row'
    },
    backButtonArrow:{
        width:hp('6.2%'),
        marginHorizontal:1,
    },
    normalFont:{
        fontFamily:"product_sans_regular",
        fontSize: hp('2%'),
        color:'#fff'
    },
    boldFont:{
        fontFamily:"ProductSansBold",
        fontSize: hp('2%'),
    },
    normalHeading:{
        fontFamily:"product_sans_regular",
        fontSize: hp('3%'),
        color:'#fff'
    },
    boldHeading:{
        fontFamily:"ProductSansBold",
        fontSize: hp('3%'),
        color:'#fff'
    },
    subTitle:{
        fontFamily:"product_sans_regular",
        fontSize: hp('1.5%'),
        color:'#fff'
    },
    defaultImage:{
        aspectRatio:4/3,        
    },
    italicText:{
        fontFamily:"ProductSansItalic",
        fontSize: hp('3%'),
        color:'#fff'
    },
    defaultThemeColor:{
        color:'#1a4981',
    },
    defaultThemeBgColor:{
        backgroundColor:'#1a4981'
    },
    defaultThemeSecondaryBgColor:{
        backgroundColor:'#d7e4fc'
    },
    defaultButton:{
        backgroundColor:'#1a4981',
        alignItems:'center',
        paddingVertical:hp('2%'),
        borderRadius:hp('5%'),
        marginVertical:hp('1%')
    },
    defaultTextInput:{
        backgroundColor:'#dfe9fd',
        alignItems:'center',
        paddingVertical:hp('1.4%'),
        alignContent:'center',
        paddingLeft:wp('5%'),
        borderRadius:hp('5%'),
        marginVertical:hp('0.5%'),
        color:'#1a4981'
    },
    textIcon:{
        position:'relative',
        alignSelf:'flex-end',
        bottom:43,
        right:20,
    }
});