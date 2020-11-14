import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Platform,
} from 'react-native';
import jwt_decode from 'jwt-decode';

import axios from '../../utils/axios';

import deviceStorage from '../../utils/deviceStorage';
import Colors from '../../constants/Colors';

import SplashScreen from '../SplashScreen';

import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';

const LoginScreen = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        const initalizeAuth = async () => {
            const [jwt, expired] = await deviceStorage.loadJWT();

            if (!expired) {
                const decodedJWT = await jwt_decode(jwt);
                const userId = decodedJWT.id;
                dispatch(authActions.login(userId));
            }

            const schoolId = await deviceStorage.loadSchool();
            if (schoolId) {
                dispatch(authActions.addSchool(schoolId));
            }

            if (!expired && schoolId) return;

            setIsLoading(false);
        };
        initalizeAuth();
    }, []);

    const handleLogin = async () => {
        const response = await axios.post('/auth/login', {
            username: username,
            password: password,
        });

        const accessToken = response.data;

        if (accessToken !== 'KO') {
            await deviceStorage.saveItem('jwt', accessToken);
            const decodedJWT = await jwt_decode(accessToken);
            const userId = decodedJWT.id;
            dispatch(authActions.login(userId));

            props.navigation.push('SchoolCode');
        }
    };

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <View style={styles.screen}>
            <View style={styles.loginContainer}>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.loginInput}
                        onChangeText={setUsername}
                        value={username}
                        placeholder="username"
                        autoCapitalize="none"
                        autoFocus={true}
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.loginInput}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="password"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Something"
                            color={Colors.primaryPurple}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Login"
                            color={Colors.primaryPurple}
                            onPress={handleLogin}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    loginInput: {
        color: 'black',
        borderBottomWidth: 1,
        height: 40,
        paddingLeft: 6,
    },
    loginForm: {
        width: '80%',
        borderWidth: 1,
        marginBottom: 10,
    },
    loginContainer: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.5,

        elevation: 3,

        width: 300,
        height: 300,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'column',
    },
    button: {
        marginVertical: 5,
        width: 150,
    },
});

export default LoginScreen;
