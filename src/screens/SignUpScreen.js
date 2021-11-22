import React from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { globalstyle } from '../globalStylsheet';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

function SignUpScreen(props) {
    const {navigation} = props;
    return ( 
        <>
                <Image source={require('../assets/images/third-bg.png')} style={globalstyle.defaultBackground}  />
                <TouchableOpacity style={globalstyle.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/icons/back-title.png')} style={globalstyle.backButtonArrow} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={[globalstyle.normalHeading,styles.LogHeading]} >Sign Up</Text>
                
            
                <KeyboardAvoidingView 
                    style={{flex:1}}
                    behavior= {"padding"}
                    enabled={false}
                >
                <View style={styles.content} >
                    <View>
                        <TextInput
                            style={[globalstyle.defaultTextInput,{marginBottom:20}]}
                            placeholder="Name"
                            placeholderTextColor={'#a2b6d3'}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={globalstyle.defaultTextInput}
                            placeholder="Email/ Phone Number"
                            placeholderTextColor={'#a2b6d3'}
                        />
                        <Image source={require('../assets/images/icons/mail.png')} style={globalstyle.textIcon} />
                    </View>
                    <View>
                        <TextInput
                            style={globalstyle.defaultTextInput}
                            placeholder="Password"
                            placeholderTextColor={'#a2b6d3'}
                            secureTextEntry={true}
                        />
                        <Image source={require('../assets/images/icons/lock.png')} style={globalstyle.textIcon} />
                    </View>
                    <View>
                        <TextInput
                            style={globalstyle.defaultTextInput}
                            placeholder="Confirm Password"
                            placeholderTextColor={'#a2b6d3'}
                            secureTextEntry={true}
                        />
                        <Image source={require('../assets/images/icons/lock.png')} style={globalstyle.textIcon} />
                    </View>
                    <TouchableOpacity style={[globalstyle.defaultButton,styles.button]} onPress={() => navigation.navigate('DashboardScreen')}>
                        <Text style={[globalstyle.normalFont,globalstyle.defaultThemeColor,globalstyle.boldFont]}>SIGN UP</Text>
                    </TouchableOpacity>
                    <View style={styles.dontHave}>
                            <Text style={globalstyle.subTitle} >By signing up,you are agreeing </Text>
                            <TouchableWithoutFeedback>
                                <View style={{display:'flex',flexDirection:'row'}}>
                                    <Text style={globalstyle.subTitle}>with our </Text>
                                    <Text style={[globalstyle.subTitle,{textDecorationStyle:'dashed',textDecorationLine:'underline'}]}>
                                         Terms and Conditions
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                </View>
                </View>
                </KeyboardAvoidingView>
                
        </>
     );
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:wp('10%'),
        paddingBottom:hp('4%')
    },
    contentText:{
        textAlign:'center',
        marginVertical:hp('3%')
    },
    LogHeading:{
        fontSize:hp('4%'),
        position:'absolute',
        top:100,
        left:30,
    },
    button:{
        backgroundColor:'#fff'
    },
    dontHave:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    }
});

export default SignUpScreen;