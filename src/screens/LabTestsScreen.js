import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../components/HeaderBar';
import InnerAppTitle from '../components/InnerAppTitle';
import { globalstyle } from '../globalStylsheet';
function LabTestsScreen(props) {
    const {navigation} = props;
    
    return (
        <> 
            <Image source={require('../assets/images/sec-bg.png')} style={globalstyle.defaultBackground}  />
            <Header />
            <InnerAppTitle title="Lab Tests" navigation={navigation} />
            <View style={styles.content}>
                <ScrollView style={{marginBottom:hp('4%')}}>
                    <TouchableOpacity >
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/pcr-test.png')} 
                                style={{width:60,height:60}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>PCR Test</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/health-checkups.png')} 
                                style={{width:60,height:60}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>Health Checkups</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/profile-lab.png')} 
                                style={{width:60,height:60}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>Profile</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/upload-prescription.png')} 
                                style={{width:60,height:60}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>Upload</Text>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle,{fontSize:hp('2.5%')}]}>Prescription</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
     );
}

export default LabTestsScreen;

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