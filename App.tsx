import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { AppNavigator } from './src/screens/AppNavigator';





const loadCustomFonts = async () => {
  const fontsLoaded = await Font.loadAsync({
    ComfortaaRegular: require('./fonts/Comfortaa-Regular.ttf'),
    ComfortaaBold: require('./fonts/Comfortaa-Bold.ttf'),
    RobotoMonoRegular: require('./fonts/RobotoMono-Regular.ttf'),
    RobotoMonoBold: require('./fonts/RobotoMono-Bold.ttf'),
    PixelRegular: require('./fonts/PixelifySans-Regular.ttf'),
    Granite: require('./fonts/Granite-Bgvl.ttf'),
  });
  console.log('Font loading result:', fontsLoaded);
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadCustomFonts();
      }
      catch {
        console.log('Font loading failed');
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  if (appIsReady) {
    SplashScreen.hideAsync();
  }
  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
});
