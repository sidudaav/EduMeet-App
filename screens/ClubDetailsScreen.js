import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';
import Colors from '../constants/Colors';

import * as clubActions from '../store/actions/clubs';
import { useDispatch } from 'react-redux';

const ClubDetailsScreen = (props) => {
    const { club } = props.route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clubActions.setCurrentClub(club));
    }, [props.route.params.club]);

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.clubNameContainer}>
                <Text style={styles.clubName}>{club.name}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.description}>
                    {club.description}
                </Text>
                {club.websiteLink && (
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() =>
                                Linking.openURL(club.websiteLink)
                            }
                            style={styles.websiteLinkContainer}
                        >
                            <Text style={styles.websiteLink}>
                                WEBSITE
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#fff',
        flex: 1,
    },
    clubNameContainer: {
        backgroundColor: Colors.primaryGreen,
    },
    clubName: {
        color: '#fff',
        fontWeight: '900',
        textAlign: 'center',
        marginVertical: 50,
        paddingHorizontal: 30,
        fontSize: 25,
        lineHeight: 40,
    },
    detailsContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    description: {
        lineHeight: 25,
    },
    websiteLinkContainer: {
        backgroundColor: Colors.primaryPurple,
        width: '80%',
        borderRadius: 20,
        paddingVertical: 20,
        marginVertical: 30,
    },
    websiteLink: {
        color: '#fff',
        fontWeight: '900',
        textAlign: 'center',
    },
});

export default ClubDetailsScreen;
