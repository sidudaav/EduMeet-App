import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import MyClubsNavigator from './MyClubsNavigator';

const AppTabs = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <AppTabs.Navigator>
            <AppTabs.Screen
                name="HomeStack"
                component={HomeNavigator}
            />
            <AppTabs.Screen
                name="MyClubsStack"
                component={MyClubsNavigator}
            />
        </AppTabs.Navigator>
    );
};

export default AppNavigator;
