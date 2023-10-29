import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, StatusBar, TextInput, SafeAreaView } from 'react-native';
import { ToggleButton } from 'react-native-paper';





interface SettingScreenProps {
    navigation: any;
}

export const SettingScreen: React.FC<SettingScreenProps> = ({ navigation }) => {
    // Status bar properties
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);
    const [value, setValue] = React.useState('lbs');
    const [number, onChangeNumber] = React.useState("0");

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            <View style={styles.weightsettings}>
                <Text style={{ color: 'lightgray', fontSize: 20, fontFamily: 'ComfortaaRegular' }}>Weight Unit: </Text>
                <ToggleButton.Row onValueChange={value => setValue(value)} value={value} style={styles.weightunit} >
                    <ToggleButton icon="weight-pound" value="lbs" color='lightgray' />
                    <ToggleButton icon="weight-kilogram" value="kg" color='lightgray' />
                </ToggleButton.Row>
            </View>
            <View style={styles.calsettings}>
                <Text style={{ color: 'lightgray', fontSize: 20, fontFamily: 'ComfortaaRegular' }}>Daily Calories (kcal): </Text>
                <SafeAreaView>
                    <TextInput
                        style={styles.calTextInput}
                        onChangeText={onChangeNumber}
                        placeholder='kCal'
                        textAlign='right'
                        value={number}
                        inputMode='numeric'
                        blurOnSubmit={true}
                    />
                </SafeAreaView>
            </View>
            <View style={styles.footer}>
                <Image
                    source={require('../images/patreon.png')}
                    style={styles.backgroundImage}
                />

                <Text style={styles.developtext}>Developed by: Jonathan Wu</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        marginTop: 75,
        fontSize: 30,
        fontFamily: 'RobotoMonoBold',
        color: '#fff',
    },
    weightsettings: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    weightunit: {
        marginLeft: 15,
        backgroundColor: '#565656',
        borderRadius: 10,
    },
    calsettings: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    calTextInput: {
        marginLeft: 15,
        height: 40,
        width: 150,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#565656',
        color: 'lightgray',
    },
    footer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        marginBottom: -50,
        resizeMode: 'center',
    },
    developtext: {
        fontSize: 20,
        fontFamily: 'PixelRegular',
        color: 'lightgrey',
    },
});
