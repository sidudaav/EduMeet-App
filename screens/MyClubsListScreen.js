import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { useSelector } from 'react-redux';

import axios from '../utils/axios';
import ClubsList from '../components/ClubsList';

const MyClubsListScreen = (props) => {
    const [clubs, setClubs] = useState([]);

    const authState = useSelector((state) => state.auth);
    const userId = authState.userId;

    useEffect(() => {
        const getClubs = async () => {
            const response = await axios.get(
                `/users/${userId}/clubs`,
            );

            setClubs(response.data);
        };
        getClubs();
    }, []);

    return (
        <ScrollView style={styles.screen}>
            {clubs && (
                <ClubsList
                    clubs={clubs}
                    navigation={props.navigation}
                />
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default MyClubsListScreen;
