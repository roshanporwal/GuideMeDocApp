import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import Header from '../components/HeaderBar';
import InnerAppTitle from '../components/InnerAppTitle';
import { globalstyle } from '../globalStylsheet';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function NewConsultationScreen(props) {
    const {navigation} = props;
    const [dateOne,setDateOne] = useState('');
    return (
        <> 
            <Image source={require('../assets/images/sec-bg.png')} style={globalstyle.defaultBackground}  />
            <Header />
            <InnerAppTitle title="New Consultation" navigation={navigation} />
            <View style={styles.content}>
                <View>
                    <View style={styles.localTextIcon}>
                        <Icon name="search1" size={22} color="#fff" />
                    </View>
                    <TextInput 
                        style={[globalstyle.defaultTextInput,globalstyle.defaultThemeBgColor,styles.localTextInput,]}
                        placeholder="Dr. Name, Hospital, Speciality"
                        placeholderTextColor={'#a2b6d3'}
                    />
                </View>
                <View>
                    <View style={styles.localTextIcon}>
                        <EntIcon name="globe" size={22} color="#fff" />
                    </View>
                    <TextInput 
                        style={[globalstyle.defaultTextInput,globalstyle.defaultThemeBgColor,styles.localTextInput,]}
                        placeholder="Dr. Name, Hospital, Speciality"
                        placeholderTextColor={'#a2b6d3'}
                    />
                </View>
                <View>
                    <View style={styles.localTextIcon}>
                        <Icon name="calendar" size={22} color="#fff" />
                    </View>
                    <DatePicker 
                        style={[globalstyle.defaultTextInput,globalstyle.defaultThemeBgColor,styles.datepicker,]}
                        placeholder="Date Preference 1"
                        date={dateOne}
                        onDateChange={(date) => {setDateOne(date)}}
                        customStyles={{
                            dateIcon: {
                                display:'none',
                            },
                            placeholderText:{
                                color:'#fff'
                            },
                            dateInput:{
                                borderWidth:0,
                                paddingVertical:hp('1.4%'),
                            }
                        }}
                    />
                </View>
                <View>
                    <View style={styles.localTextIcon}>
                        <Icon name="calendar" size={22} color="#fff" />
                    </View>
                    <TextInput 
                        style={[globalstyle.defaultTextInput,globalstyle.defaultThemeBgColor,styles.localTextInput,]}
                        placeholder="Dr. Name, Hospital, Speciality"
                        placeholderTextColor={'#a2b6d3'}
                    />
                </View>
                <View>
                    <View style={styles.localTextIcon}>
                        <Icon name="filetext1" size={22} color="#fff" />
                    </View>
                    <TextInput 
                        style={[globalstyle.defaultTextInput,globalstyle.defaultThemeBgColor,styles.localTextInput,]}
                        placeholder="Dr. Name, Hospital, Speciality"
                        placeholderTextColor={'#a2b6d3'}
                    />
                </View>
            </View>
        </>
     );
}

export default NewConsultationScreen;

const styles = StyleSheet.create({
    content:{
        paddingHorizontal:30,
        marginTop:20,
    },
    localTextIcon:{
        zIndex:999,
        left:12,
        top:40
    },
    localTextInput:{
        paddingLeft:wp('12%'),
    },
    datepicker:{
        paddingLeft:wp('12%'),
        width:wp('84%'),
        color:'#fff'
    }
});