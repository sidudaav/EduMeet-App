import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';
import axios from '../../utils/axios';

import deviceStorage from '../../utils/deviceStorage';

import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';

const SchoolCodeScreen = (props) => {
    const [code, setCode] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const response = await axios.post(`/schools/find/${code}`, {
            code: code,
        });

        const school = response.data;

        if (school) {
            await deviceStorage.saveItem('school', school._id);
            dispatch(authActions.addSchool(school._id));
        }
    };

    return (
        <View style={styles.screen}>
            <Text>Enter School Code</Text>
            <TextInput
                autoCapitalize="characters"
                onChangeText={(e) => setCode(e)}
                value={code}
                autoCorrect={false}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default SchoolCodeScreen;
