import React from 'react';
import {
  Text,
} from 'react-native';
import { globalstyle } from './globalStylsheet.js';
import NotificationService from './services/push_notif_service.js';


const App = () => {

  return (
    <>
      <NotificationService />
      <Text style={globalstyle.normalFont}>Normal Text</Text>
      <Text style={globalstyle.normalHeading}>NormaL Heading</Text>
      <Text style={globalstyle.boldHeading}>Bold Heading</Text>
      <Text style={globalstyle.subTitle}>Subtitle</Text>
    </>
  );
};
 
export default App;
