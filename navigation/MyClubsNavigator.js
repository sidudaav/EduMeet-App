import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyClubsListScreen from '../screens/MyClubsListScreen';

const MyClubs = createStackNavigator();

const MyClubsNavigator = () => {
    return (
        <MyClubs.Navigator>
            <MyClubs.Screen
                name="MyClubsList"
                component={MyClubsListScreen}
            />
        </MyClubs.Navigator>
    );
};

export default MyClubsNavigator;
