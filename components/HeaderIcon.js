import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderIcon = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
        >
            <Ionicons
                name={props.name}
                size={props.size}
                color={props.color}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
    },
});

export default HeaderIcon;
