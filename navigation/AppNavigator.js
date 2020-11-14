import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';
import MyClubsNavigator from './MyClubsNavigator';

import Colors from '../constants/Colors';

const AppTabs = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <AppTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeStack') {
                        iconName = focused ? 'ios-home' : 'ios-home';
                    } else if (route.name === 'MyClubsStack') {
                        iconName = focused
                            ? 'ios-list-box'
                            : 'ios-list';
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.primaryPurple,
                labelStyle: {
                    marginBottom: 5,
                    fontSize: 12,
                },
            }}
        >
            <AppTabs.Screen
                name="HomeStack"
                component={HomeNavigator}
                options={{
                    title: 'Home',
                }}
            />
            <AppTabs.Screen
                name="MyClubsStack"
                component={MyClubsNavigator}
                options={{
                    title: 'My Clubs',
                }}
            />
        </AppTabs.Navigator>
    );
};

export default AppNavigator;
