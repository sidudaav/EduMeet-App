import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ClubDetailsScreen from '../screens/ClubDetailsScreen';
import ClubMembersScreen from '../screens/ClubMembersScreen';
import ClubAnnouncementsScreen from '../screens/ClubAnnouncementsScreen';
import ClubEventsScreen from '../screens/ClubEventsScreen';

const TopTabs = createMaterialTopTabNavigator();

const ClubDetailsNavigator = () => {
    return (
        <TopTabs.Navigator
            tabBarOptions={{
                scrollEnabled: true,
            }}
        >
            <TopTabs.Screen
                name="Details"
                component={ClubDetailsScreen}
            />
            <TopTabs.Screen
                name="Announcements"
                component={ClubAnnouncementsScreen}
            />
            <TopTabs.Screen
                name="Events"
                component={ClubEventsScreen}
            />
            <TopTabs.Screen
                name="Members"
                component={ClubMembersScreen}
            />
        </TopTabs.Navigator>
    );
};

export default ClubDetailsNavigator;
