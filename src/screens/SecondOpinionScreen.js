import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../components/HeaderBar';
import InnerAppTitle from '../components/InnerAppTitle';
import { globalstyle } from '../globalStylsheet';
function SecondOpinionScreen(props) {
    const {navigation} = props;
    
    return (
        <> 
            <Image source={require('../assets/images/sec-bg.png')} style={globalstyle.defaultBackground}  />
            <Header />
            <InnerAppTitle title="Second Opinion" navigation={navigation} />
            <View style={styles.content}>
                <TouchableOpacity >
                    <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                        <Image source={require('../assets/images/icons/sec_op_surgery.png')} 
                            style={{width:80,height:80}}
                            resizeMode="contain"    
                        />
                        <View>
                            <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>Second Opinion For</Text>
                            <Text style={[globalstyle.normalHeading,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>Surgery</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                        <Image source={require('../assets/images/icons/internatonal_opinion.png')} 
                            style={{width:80,height:80}}
                            resizeMode="contain"    
                        />
                        <View>
                            <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>International</Text>
                            <Text style={[globalstyle.normalHeading,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>Second Opinion</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </>
     );
}

export default SecondOpinionScreen;

const styles = StyleSheet.create({
    content:{
        paddingHorizontal:30,
        marginTop:20,
    },
    tabsCell:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:16,
        paddingVertical:hp('5%'),
        paddingHorizontal:wp('3%'),
        marginVertical:hp('2%')
    },
    tabsCellTitle:{
        width:wp('50%'),
        textAlign:'center'
    },
});