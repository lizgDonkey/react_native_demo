import React, { useEffect } from 'react';

import { StyleSheet, SafeAreaView, View  } from 'react-native';
import WebIM from './utils/WebIM'
import initEventHandler from './utils/WebIMEvent'
import LoginPage from './componments/loginPages'
import MainPage from './componments/mainPages'
export default function App() {
  console.log(WebIM);

  useEffect(() => {
    initEventHandler()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <LoginPage />
        <MainPage />
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
