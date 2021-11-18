import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const globalstyle = StyleSheet.create({
    normalFont:{
        fontSize: hp('2%')
    },
    normalHeading:{
        fontSize: hp('3%')
    },
    boldHeading:{
        fontSize: hp('3%'),
        fontWeight:'800',
    },
    subTitle:{
        fontSize: hp('1.5%'),
    },
    defaultImage:{
        width: wp('80%')
    }
});