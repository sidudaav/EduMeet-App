import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/auth/LoginScreen';
import SchoolCodeScreen from '../screens/auth/SchoolCodeScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen
                name="SchoolCode"
                component={SchoolCodeScreen}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
