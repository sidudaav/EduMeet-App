import React from 'react';
import { View, Text } from 'react-native';

const ClubDetailsScreen = (props) => {
    const { club } = props.route.params;
    return (
        <View>
            <Text>Clubs Details</Text>
            <Text>{club.name}</Text>
        </View>
    );
};

export default ClubDetailsScreen;
