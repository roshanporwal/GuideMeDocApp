//import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import PushNotification, { Importance } from 'react-native-push-notification';
//import uuid from 'react-native-uuid';
export default function NotificationService() {

  PushNotification.configure({

    onRegister: function (token) {
      //sets the token 
      //AsyncStorage.setItem('fcmToken', JSON.stringify(token));
      console.log('token set : ', token);
    },


    onNotification: function (notification) {
      console.log('notification ', notification)
    
    },
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
      // process the action
    },

    //senderID: "480830851531",


    popInitialNotification: true,
    requestPermissions: false, // set to true if you want to request iOS notification when the app starts
  });

  PushNotification.createChannel(
    {
      channelId: "guidemedc-notifs", //
      channelName: "Guide Me doc", // (required)
      channelDescription: "All local Guide Me doc notifcations to be made from this channel", // (optional) default: undefined.
      playSound: true,
      soundName: "default",
      importance: Importance.HIGH,
      vibrate: true,
    },
  );


  return (
    <></>
  );
}
