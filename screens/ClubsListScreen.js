import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import axios from '../utils/axios';

import deviceStorage from '../utils/deviceStorage';

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

    const renderClubs = () => {
        const onPress = (club) => {
            props.navigation.push('ClubDetails', {
                club: club,
            });
        };

        return clubs.map((club) => {
            return (
                <TouchableOpacity
                    key={club._id}
                    onPress={() => onPress(club)}
                >
                    <View>
                        <Text>{club.name}</Text>
                    </View>
                </TouchableOpacity>
            );
        });
    };

    return <ScrollView>{clubs && renderClubs()}</ScrollView>;
};

export default ClubsListScreen;
