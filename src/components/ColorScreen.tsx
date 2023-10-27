import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Styles } from './Styles';
import Colors from './Colors';
import MyHeader from './MyHeader';
import { RouteProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Add: undefined;
  Account: undefined;
  Like: undefined;
};

type ColorScreenRouteProp = RouteProp<RootStackParamList, keyof RootStackParamList>;

interface ColorScreenProps {
  route: ColorScreenRouteProp;
}

export default function ColorScreen({ route }: ColorScreenProps) {
  const viewRef = useRef<Animatable.View | null>(null);
  const navigation = useNavigation();
  const [bgColor, setBgColor] = useState<string | undefined>();

  useEffect(() => {
    switch (route.name) {
      case 'Home': {
        setBgColor(Colors.primary);
        break;
      }
      case 'Search': {
        setBgColor(Colors.green);
        break;
      }
      case 'Add': {
        setBgColor(Colors.red);
        break;
      }
      case 'Account': {
        setBgColor(Colors.purple);
        break;
      }
      case 'Like': {
        setBgColor(Colors.yellow);
        break;
      }
      default:
        setBgColor(Colors.white);
    }
  }, [route.name]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (viewRef.current) {
        viewRef.current.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
      }
    });
    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
      <Animatable.View
        ref={viewRef}
        easing="ease-in-out"
        style={Styles.container}
      >
        <View style={{ backgroundColor: bgColor, flex: 1 }} />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({});
