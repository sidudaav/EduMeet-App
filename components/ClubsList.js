import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Colors from '../constants/Colors';

const ClubsList = (props) => {
    const { clubs, navigation } = props;
    return clubs.map((club) => {
        return (
            <TouchableOpacity
                key={club._id}
                onPress={() =>
                    navigation.navigate('ClubDetails', {
                        screen: 'Details',
                        params: {
                            club: club,
                        },
                    })
                }
                style={styles.clubContainer}
            >
                <Text style={styles.clubName}>
                    Huron High School {club.name}
                </Text>
            </TouchableOpacity>
        );
    });
};

const styles = StyleSheet.create({
    clubContainer: {
        borderBottomWidth: 5,
        borderBottomColor: Colors.primaryGreen,
        paddingLeft: 30,
        paddingRight: 30,
    },
    clubName: {
        fontSize: 16,
        fontWeight: '800',
        marginVertical: 30,
    },
});

export default ClubsList;
