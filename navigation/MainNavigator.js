import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const MainNavigator = () => {
    const authState = useSelector((state) => state.auth);

    if (authState.userId && authState.schoolId) {
        return (
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
};

export default MainNavigator;
