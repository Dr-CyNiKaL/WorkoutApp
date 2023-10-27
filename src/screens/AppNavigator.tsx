import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen } from './LandingScreen';
import { HomeScreen } from './HomeScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing"
            screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Landing" component={LandingScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
