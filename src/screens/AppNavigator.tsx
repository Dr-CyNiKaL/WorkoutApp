import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { LandingScreen } from './LandingScreen';
import { HomeScreen } from './HomeScreen';
import { WorkoutTrackingScreen } from './WorkoutTrackingScreen';
import { TimerScreen } from './TimerScreen';
import { NutritionScreen } from './NutritionScreen';
import { SettingScreen } from './SettingScreen';





const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createMaterialBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home' activeColor='#f0edf6' inactiveColor='#223548' barStyle={{ backgroundColor: '#475E75' }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name="Workout" component={WorkoutTrackingScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="fitness-center" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name="Timer" component={TimerScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="timer" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="restaurant" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="settings" size={24} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
