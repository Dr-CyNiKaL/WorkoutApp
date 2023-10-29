import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";

import Result from "../components/Result";
import Control from "../components/Control";
import { displayTime } from "../components/util";





interface TimerScreenProps {
    navigation: any;
}

export const TimerScreen: React.FC<TimerScreenProps> = ({ navigation }) => {
    // Status bar properties
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);

    const [time, setTime] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const [results, setResults] = useState<number[]>([]);
    const timer = useRef(null);
    const handleLeftButtonPress = useCallback(() => {
        if (isRunning) {
            setResults((previousResults) => [time, ...previousResults]);
        } else {
            setResults([]);
            setTime(0);
        }
    }, [isRunning, time]);
    const startTimer = useCallback(() => {
        const interval = setInterval(() => {
            setTime((previousTime) => previousTime + 1);
        }, 10);
        timer.current = interval;
    }, []);

    const stopTimer = useCallback(() => {
        if (timer.current !== null) {
            clearInterval(timer.current);
        }
    }, []);

    const handleRightButtonPress = useCallback(() => {
        if (!isRunning) {
            startTimer();
        } else {
            stopTimer();
        }
        setRunning((previousState) => !previousState);
    }, [isRunning, startTimer, stopTimer]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{displayTime(time)}</Text>
            </View>
            <View style={styles.control}>
                <Control
                    isRunning={isRunning}
                    handleLeftButtonPress={handleLeftButtonPress}
                    handleRightButtonPress={handleRightButtonPress}
                />
            </View>
            <View style={styles.result}>
                <Result results={results} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1c1e",
        paddingTop: Constants.statusBarHeight,
    },
    display: {
        flex: 3 / 5,
        justifyContent: "center",
        alignItems: "center",
    },
    displayText: {
        color: "#fff",
        fontSize: 70,
        fontWeight: "200",
        fontFamily: "RobotoMonoBold"
    },
    control: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    result: { flex: 2 / 5 },
});
