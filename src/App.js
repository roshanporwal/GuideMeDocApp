import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigation from './navigation/MainNavigation.js';
import NotificationService from './services/push_notif_service.js';


const App = () => {
  console.log('in app')
  return (
    <SafeAreaView style={{
        flex: 1,
    }}>
      <MainNavigation />
      <NotificationService />
      {/* <LoadingScreen /> */}
    </SafeAreaView>
  );
};
 
export default App;
