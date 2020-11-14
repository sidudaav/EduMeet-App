import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import ClubsListScreen from '../screens/ClubsListScreen';
import ClubDetailsNavigator from './ClubDetailsNavigator';

import HeaderIcon from '../components/HeaderIcon';
import axios from '../utils/axios';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    const authState = useSelector((state) => state.auth);
    const clubsState = useSelector((state) => state.clubs);

    const { userId } = authState;
    const { currentClub } = clubsState;

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="ClubsList"
                component={ClubsListScreen}
                options={{
                    title: 'Clubs List',
                }}
            />
            <HomeStack.Screen
                name="ClubDetails"
                component={ClubDetailsNavigator}
                options={{
                    title: 'Club Details',
                    headerRight: () => (
                        <HeaderIcon
                            name="ios-add"
                            size={30}
                            color="green"
                            onPress={() => {}}
                        />
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
