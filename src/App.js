import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigation from './navigation/MainNavigation.js';
import TabNavigation from './navigation/TabNavigation.js';
import NotificationService from './services/push_notif_service.js';


const App = () => {
  console.log('in app')
  return (
    <>    
      <MainNavigation />
      <NotificationService />
      {/* <LoadingScreen /> */}
    </>
  );
};
 
export default App;
