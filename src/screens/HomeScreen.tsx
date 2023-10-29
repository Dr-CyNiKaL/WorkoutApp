import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, StatusBar, TouchableOpacity, BackHandler, Alert } from 'react-native';


interface HomeScreenProps {
    navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    // Status bar properties
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);

    // Handle back button
    useEffect(() => {
        const handleBackButton = () => {
            Alert.alert('Closing App', 'Exiting the application?', [{
                text: 'CANCEL',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'EXIT',
                onPress: () => BackHandler.exitApp()
            },], {
                cancelable: false
            }
            )
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackButton
        );
        return () => backHandler.remove();
    }, []);

    // Home Screen
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>No Pain,   No Gains.</Text>
            <View style={styles.content}>
            </View>
        </View>
    );
};

// Obtain width and height
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1e',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
        marginTop: 75,
        fontSize: 30,
        fontFamily: 'Granite',
        color: 'lightgrey',
    },
    content: {
        flex: 5,
        backgroundColor: '#fff',
    }
});
