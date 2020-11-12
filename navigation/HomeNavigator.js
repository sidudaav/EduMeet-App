import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ClubsListScreen from '../screens/ClubsListScreen';
import ClubDetailsScreen from '../screens/ClubDetailsScreen';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="ClubsList"
                component={ClubsListScreen}
            />
            <HomeStack.Screen
                name="ClubDetails"
                component={ClubDetailsScreen}
            />
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
