import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{ ...styles.buttonContainer, ...props.style }}
        >
            {props.children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primaryPurple,
        width: '80%',
        borderRadius: 20,
        paddingVertical: 20,
        marginVertical: 30,
    },
});

export default Button;
