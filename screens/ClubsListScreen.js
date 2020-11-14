import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import axios from '../utils/axios';

import deviceStorage from '../utils/deviceStorage';
import ClubsList from '../components/ClubsList';

const ClubsListScreen = (props) => {
    const [school, setSchool] = useState(null);
    const [clubs, setClubs] = useState(null);

    const getSchoolInfo = async () => {
        const schoolId = await deviceStorage.loadSchool();
        const response = await axios.get(`/schools/${schoolId}`);
        const school = response.data;

        setSchool(school);

        let schoolClubs = [];
        for (let i = 0; i < school.clubs.length; i++) {
            const clubId = school.clubs[i];
            const response = await axios.get(`/clubs/${clubId}`);
            const club = response.data;

            schoolClubs.push(club);
        }

        setClubs(schoolClubs);
    };

    useEffect(() => {
        getSchoolInfo();
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

export default ClubsListScreen;
