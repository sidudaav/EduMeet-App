import React from 'react';
import {
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet,
    View,
} from 'react-native';

const DismissKeyboard = (props) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {props.children}
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({});

export default DismissKeyboard;
