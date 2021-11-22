import React from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { globalstyle } from '../globalStylsheet';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { SafeAreaView } from 'react-native-safe-area-context';

function LoginScreen(props) {
    const {navigation} = props;
    return ( 
        <>
                <Image source={require('../assets/images/first-bg.png')} style={globalstyle.defaultBackground}  />
                <TouchableOpacity style={globalstyle.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/icons/back-title.png')} style={globalstyle.backButtonArrow} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={[globalstyle.normalHeading,styles.LogHeading]} >Log In</Text>
                
            
                <KeyboardAvoidingView 
                    style={{flex:1}}
                    behavior= {(Platform.OS === 'ios')? "padding" : null}
                >
                <View style={styles.content} >
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
                    <TouchableOpacity style={[globalstyle.defaultButton,styles.button]} onPress={() => navigation.navigate('DashboardScreen')}>
                        <Text style={[globalstyle.normalFont,globalstyle.defaultThemeColor,globalstyle.boldFont]}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={styles.dontHave}>
                        <Text style={globalstyle.subTitle} >Don't have an account? </Text>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUpScreen')}>
                            <View>
                            <Text style={[globalstyle.subTitle,{textDecorationStyle:'dashed',textDecorationLine:'underline'}]}>
                                Create new now!
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
        flexDirection:'row',
        display:'flex',
        justifyContent:'center'
    }
});

export default LoginScreen;