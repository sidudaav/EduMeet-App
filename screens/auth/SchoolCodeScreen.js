import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
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
        <View>
            <Text>Enter School Code</Text>
            <TextInput
                autoCapitalize="characters"
                onChangeText={(e) => setCode(e)}
                value={code}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default SchoolCodeScreen;
