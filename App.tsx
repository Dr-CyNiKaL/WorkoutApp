import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import Apploading from "expo-app-loading"
import * as SplashScreen from 'expo-splash-screen';

import { AppNavigator } from './src/screens/AppNavigator';




const loadCustomFonts = async () => {
  await Font.loadAsync({
    'Comfortaa-Regular': require('./fonts/Comfortaa-Regular.ttf'),
    'RobotoMono-Regular': require('./fonts/RobotoMono-Regular.ttf'),
    'RobotoMono-Bold': require('./fonts/RobotoMono-Bold.ttf'),
    'Pixel-Regular': require('./fonts/PixelifySans-Regular.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <Apploading
        startAsync={loadCustomFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
