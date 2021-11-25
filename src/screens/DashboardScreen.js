import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/HeaderBar';
import { globalstyle } from '../globalStylsheet';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function DashboardScreen(props) {
    const {navigation} = props;
    return ( 
        <>
            <Image source={require('../assets/images/sec-bg.png')} style={globalstyle.defaultBackground}  />
            <Header/>
            <View style={styles.content}>
                <View style={[globalstyle.defaultThemeBgColor,styles.redeem]}>
                    <Image source={require('../assets/images/icons/redeem_stars.png')}/>
                    <Text style={[globalstyle.normalFont,{marginHorizontal:10}]}>Redeem Your GMD Points</Text>
                </View>
                <View style={styles.tabsRow}>
                    <TouchableOpacity onPress={() =>navigation.navigate('NewConsultationScreen')}>
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/new_consultation.png')} 
                                style={{width:40,height:40}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>New</Text>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>Consultation</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>navigation.navigate('SecondOpinionScreen')}>
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/second_op.png')} 
                                style={{width:40,height:40}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>Second</Text>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>Opinion</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabsRow}>
                    <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                        <Image source={require('../assets/images/icons/home_service.png')} 
                            style={{width:40,height:40}}
                            resizeMode="contain"    
                        />
                        <View>
                            <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>Home</Text>
                            <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>Service</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() =>navigation.navigate('PharmacyScreen')}>
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/pharmacy.png')} 
                                style={{width:40,height:40}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>Pharmacy</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabsRow}>
                    <TouchableOpacity onPress={() =>navigation.navigate('LabTestsScreen')}>
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/lab_tests.png')} 
                                style={{width:40,height:40}}
                                resizeMode="contain"    
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>Lab Tests</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>navigation.navigate('DiagnosticScreen')}>
                        <View style={[styles.tabsCell,globalstyle.defaultThemeBgColor]}>
                            <Image source={require('../assets/images/icons/diagnostic.png')} 
                                style={{width:40,height:40}}
                                resizeMode="contain"
                            />
                            <View>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>Diagnostics/</Text>
                                <Text style={[globalstyle.normalFont,styles.tabsCellTitle]}>Radiology</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <ImageBackground source={require('../assets/images/doctor-bg.png')} resizeMode="contain"  style={styles.getBest}>

                    </ImageBackground>
                    <View style={styles.imageDesc}>
                        <Text style={[globalstyle.boldHeading]}>Get Best</Text>
                        <Text style={[globalstyle.boldHeading]}>Doctors and</Text>
                        <Text style={[globalstyle.boldHeading]}>Deals.</Text>
                    </View>
                </View>
            </View>
            
        </>  
    );
}

export default DashboardScreen;
const styles = StyleSheet.create({
    redeem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:18,
        paddingVertical:15,
        marginBottom:16,
    },
    content:{
        paddingHorizontal:30,
        marginTop:20,
    },
    tabsRow:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
    },
    tabsCell:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        paddingVertical:hp('3%'),
        paddingHorizontal:wp('3%'),
    },
    tabsCellTitle:{
        width:wp('24%'),
        textAlign:'center'
    },
    getBest:{
        padding:hp('2%'),
        height:hp('20%'),
        borderRadius:20,
        marginTop:hp('4%'),
        opacity:0.6,
    },
    imageDesc:{
        position:'relative',
        marginTop:hp('-16%'),
        marginLeft:wp('5%')
    }
});