import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image , StatusBar, TouchableOpacity} from 'react-native';


interface HomeScreenProps {
    navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
    // Status bar properties
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Text style={styles.content}>Home Screen</Text>
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
    },
    header: {
        flex: 0.7,
    },
    content: {
        fontSize: 20,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
