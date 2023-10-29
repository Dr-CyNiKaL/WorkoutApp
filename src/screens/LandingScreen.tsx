import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image , StatusBar, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';






interface LandingScreenProps {
    navigation: any;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({navigation}) => {
    // Status bar properties
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
                <Image
                    source={require('../images/sigma.jpg')}
                    style={styles.backgroundImage}
                />
                <Text style={[styles.workout, styles.workoutText]}>Workout</Text>
                <Text style={[styles.tracker, styles.workoutText]}>Tracker</Text>
                <TouchableOpacity style={styles.loginButton}
                onPress={()=> navigation.navigate('Main')}>
                    <Text style={styles.loginText}>Start Workout</Text>
                </TouchableOpacity>
        </View>
    );
};

// Obtain width and height
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1e',
    },
    backgroundImage: {
        flex: 15,
        resizeMode: 'cover',
        opacity: 0.65, 
        zIndex: -1,
    },
    header: {
        flex: 0.7,
        backgroundColor: '#1c1c1e',
    },
    loginButton: {
        position: 'absolute',
        backgroundColor: 'rgba(222, 228, 231, 0.5)',
        borderColor: '#7c7d73',          
        borderWidth: 2,              
        borderRadius: 10,                          
        bottom: height / 2 - height*0.4,
        left: width / 2 - 165,
        height: 75,       
        width: 330,   
        justifyContent: 'center',
        alignItems: 'center', 
      },
      loginText: {
        fontFamily: 'PixelRegular',           
        color: 'white',                 
        fontSize: 42,                               
      },
      workoutText: {
        color: 'black',
        fontFamily: 'ComfortaaBold',
        letterSpacing: -0.7,
        fontSize: 65,
        textAlign: "center",
        position: "absolute",
      },
      workout: {
        top: height / 2 - 195,
        marginLeft: width / 2 - 75,
      },
      tracker: {
        top: height / 2 - 120,
        marginLeft: width / 2 - 30,
      }
});
