import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../components/HeaderBar';
import InnerAppTitle from '../components/InnerAppTitle';
import { globalstyle } from '../globalStylsheet';
function DiagnosticScreen(props) {
    const {navigation} = props;
    
    return (
        <> 
            <Image source={require('../assets/images/sec-bg.png')} style={globalstyle.defaultBackground}  />
            <Header />
            <InnerAppTitle title="Diagnostics / Radiology" navigation={navigation} />
            <View style={styles.content}>
                <ScrollView style={{marginBottom:hp('4%')}}>
                    <TouchableOpacity >
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/x-ray.png')} 
                                style={{width:60,height:60}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>X-Ray</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/ct-scan.png')} 
                                style={{width:60,height:60}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>CT-Scan</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/mammogram.png')} 
                                style={{width:60,height:60}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>Mammogram</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/mri.png')} 
                                style={{width:60,height:60}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>MRI</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/ultrasound.png')} 
                                style={{width:60,height:60}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>Ultrasound</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
     );
}

export default DiagnosticScreen;

const styles = StyleSheet.create({
    content:{
        paddingHorizontal:30,
        marginTop:20,
        flex: 1,
    },
    tabsCell:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:16,
        paddingVertical:hp('3%'),
        paddingHorizontal:wp('3%'),
        marginVertical:hp('1%')
    },
    tabsCellTitle:{
        width:wp('50%'),
        textAlign:'center'
    },
});