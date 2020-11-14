import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import axios from '../utils/axios';

const ClubMembersScreen = (props) => {
    const [students, setStudents] = useState([]);
    const clubsState = useSelector((state) => state.clubs);
    const club = clubsState.currentClub;

    useEffect(() => {
        const getStudents = async () => {
            const response = await axios.get(
                `/clubs/${club._id}/students`,
            );
            setStudents(response.data);
        };

        getStudents();
    }, []);

    const displayStudents = () => {
        return students.map((student) => {
            if (club.admins.includes(student._id)) {
                return (
                    <View
                        key={student._id}
                        style={styles.studentContainer}
                    >
                        <View style={styles.studentInfoContainer}>
                            <Text style={styles.studentName}>
                                {student.firstName}
                            </Text>
                            <Ionicons
                                name="ios-construct"
                                size={24}
                                color="red"
                                style={styles.adminIcon}
                            />
                        </View>
                        <View style={styles.studentInfoContainer}>
                            <Text style={styles.studentGrade}>
                                {student.grade}
                            </Text>
                        </View>
                    </View>
                );
            }
            return (
                <View
                    key={student._id}
                    style={styles.studentContainer}
                >
                    <View style={styles.studentInfoContainer}>
                        <Text style={styles.studentName}>
                            {student.firstName}
                        </Text>
                    </View>
                    <View style={styles.studentInfoContainer}>
                        <Text style={styles.studentGrade}>
                            {student.grade}
                        </Text>
                    </View>
                </View>
            );
        });
    };

    return (
        <ScrollView style={styles.screen}>
            {club && displayStudents()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    studentContainer: {
        borderBottomWidth: 5,
        borderBottomColor: Colors.primaryPurple,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    studentName: {
        fontSize: 16,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    studentGrade: {
        fontSize: 16,
        fontWeight: '900',
        color: 'darkgreen',
    },
    studentInfoContainer: {
        marginVertical: 25,
        flexDirection: 'row',
    },
    adminIcon: {
        color: 'maroon',
        marginLeft: 10,
    },
});

export default ClubMembersScreen;
