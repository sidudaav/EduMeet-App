import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClubEventsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>ClubEventsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ClubEventsScreen;
