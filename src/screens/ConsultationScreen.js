import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import Header from '../components/HeaderBar';
import InnerAppTitle from '../components/InnerAppTitle';
import { globalstyle } from '../globalStylsheet';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker'
function NewConsultationScreen(props) {
    const {navigation} = props;
    const [dateOne,setDateOne] = useState('');
    const [dateTwo,setDateTwo] = useState('');
    const [pickerValue,setPickerValue] = useState('');
    const pickerRef = useRef();

    function pickerOpen() {
        pickerRef.current.focus();
    }


    const openDocument = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            })
            console.log(
                res.uri,
                res.type, // mime type
                res.name,
                res.size,
            )
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("Cancelled Document Picker")
            } else {
                throw err
            }
        }
    }
    
    
    
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
                        style={[globalstyle.defaultTextInput,globalstyle.defaultThemeBgColor,globalstyle.normalFont,styles.localTextInput,]}
                        placeholder="Dr. Name, Hospital, Speciality"
                        placeholderTextColor={'#a2b6d3'}
                    />
                </View>
                <View>
                    <View style={styles.localPickerIcon}>
                        <EntIcon name="globe" size={22} color="#fff" />
                    </View>
                    <TouchableOpacity style={styles.localPicker} onPress={() => pickerOpen()}>
                        <Picker 
                            ref={pickerRef}
                            style={{width:wp('72%'),marginLeft:wp('10%')}}
                            mode="dropdown"
                            selectedValue={pickerValue}
                            onValueChange={(itemValue, itemIndex) =>
                                setPickerValue(itemValue)
                            }
                        >
                            <Picker.Item label="Emirates" value="Emirates" 
                                style={styles.localPickerItem}
                                color="#fff"
                            />
                            <Picker.Item label="Abu Dhabi" value="Abu Dhabi" 
                                style={styles.localPickerItem}
                                color="#fff"
                            />
                            <Picker.Item label="Dubai" value="Dubai" 
                                style={styles.localPickerItem}
                                color="#fff"
                            />
                            <Picker.Item label="Sharjah" value="Sharjah" 
                                style={styles.localPickerItem}
                                color="#fff"
                            />
                            <Picker.Item label="Ajmaan" value="Ajmaan" 
                                style={styles.localPickerItem}
                                color="#fff"
                            />
                            <Picker.Item label="Umm Al-Quwain" value="Umm Al-Quwain" 
                                style={styles.localPickerItem}
                                color="#fff"
                            />
                            <Picker.Item label="Fujairah" value="Fujairah" 
                                style={styles.localPickerItem}
                                color="#fff"
                            />
                        </Picker>
                    </TouchableOpacity>
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
                                fontFamily:"product_sans_regular",
                                color:'#a2b6d3',
                                fontSize: hp('2%'),
                            },
                            dateText:{
                              fontFamily:"product_sans_regular",
                              color:"#fff",
                              fontSize: hp('2%'),
                              padding:0,
                              margin:0,  
                            },
                            dateInput:{
                                alignItems:'flex-start',
                                borderWidth:0,
                                margin:0,
                                paddingVertical:0,
                                paddingLeft:wp('10%'),
                            }
                        }}
                    />
                </View>
                <View>
                    <View style={styles.localTextIcon}>
                        <Icon name="calendar" size={22} color="#fff" />
                    </View>
                    <DatePicker 
                        style={[globalstyle.defaultTextInput,globalstyle.defaultThemeBgColor,styles.datepicker,]}
                        placeholder="Date Preference 2"
                        date={dateTwo}
                        onDateChange={(date) => {setDateTwo(date)}}
                        customStyles={{
                            dateIcon: {
                                display:'none',
                            },
                            placeholderText:{
                                fontFamily:"product_sans_regular",
                                color:'#a2b6d3',
                                fontSize: hp('2%'),
                            },
                            dateText:{
                              fontFamily:"product_sans_regular",
                              color:"#fff",
                              fontSize: hp('2%'),
                              padding:0,
                              margin:0,  
                            },
                            dateInput:{
                                alignItems:'flex-start',
                                borderWidth:0,
                                margin:0,
                                paddingVertical:0,
                                paddingLeft:wp('10%'),
                            }
                        }}
                    />
                </View>
                <View>
                    <View style={styles.localTextIcon}>
                        <Icon name="filetext1" size={22} color="#fff" />
                    </View>
                    <TouchableOpacity 
                        style={[globalstyle.defaultTextInput,globalstyle.defaultThemeBgColor,{paddingLeft:0,marginLeft:0}]}
                        onPress={() => openDocument()}
                    >
                        <Text style={[globalstyle.normalFont,{marginVertical:4}]}>Upload Reports / Medical Problems</Text>
                    </TouchableOpacity>
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
    localPickerIcon:{
        zIndex:999,
        left:12,
        top:37,
    },
    localTextInput:{
        paddingLeft:wp('12%'),
    },
    datepicker:{
        paddingLeft:wp('1%'),
        width:wp('84%'),
        color:'#fff',
        paddingVertical:hp('0.6%'),
    },
    localPicker:{
        paddingLeft:wp('1%'),
        width:wp('84%'),
        color:'#fff',
        borderRadius:hp('5%'),
        zIndex:998,
        backgroundColor:'#1a4981'
    },
    localPickerItem:{
        backgroundColor:'#1a4981',
        zIndex:999,
    }
});