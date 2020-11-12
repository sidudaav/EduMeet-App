import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import deviceStorage from '../utils/deviceStorage';

const SplashScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Splash Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SplashScreen;
