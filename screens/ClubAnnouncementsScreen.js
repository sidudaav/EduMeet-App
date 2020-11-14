import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Keyboard,
    ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Popup from '../components/Popup';
import Button from '../components/Button';
import Colors from '../constants/Colors';
import axios from '../utils/axios';

const ClubAnnouncementsScreen = () => {
    const clubsState = useSelector((state) => state.clubs);
    const authState = useSelector((state) => state.auth);
    const { userId } = authState;
    const { currentClub } = clubsState;

    const [isAdmin, setIsAdmin] = useState(false);
    const [
        addAnnouncementModalVisible,
        setAddAnnouncementModalVisibile,
    ] = useState(false);
    const [newAnnouncementBody, setNewAnnouncementBody] = useState(
        '',
    );
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        if (currentClub.admins.includes(userId)) {
            setIsAdmin(true);
        }
    }, []);

    useEffect(() => {
        const getAnnouncements = async () => {
            const response = await axios.get(
                `/clubs/${currentClub._id}/announcements`,
            );
            setAnnouncements(response.data);
        };
        getAnnouncements();
    }, []);

    const addAnnouncementModal = () => {
        const handleSubmit = async () => {
            const response = await axios.post(
                `/clubs/${currentClub._id}/announcements`,
                {
                    title: 'Test',
                    body: newAnnouncementBody,
                    user: userId,
                },
            );

            setNewAnnouncementBody('');
            setAddAnnouncementModalVisibile(false);
        };
        return (
            <Popup visible={addAnnouncementModalVisible}>
                <TouchableOpacity
                    onPress={() =>
                        setAddAnnouncementModalVisibile(false)
                    }
                    style={styles.modalClose}
                >
                    <Ionicons name="ios-close" size={36} />
                </TouchableOpacity>

                <View style={styles.popupContent}>
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Type something"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                            blurOnSubmit={true}
                            onSubmitEditing={Keyboard.dismiss}
                            value={newAnnouncementBody}
                            onChangeText={setNewAnnouncementBody}
                        />
                    </View>

                    <Button onPress={handleSubmit}>
                        <Text style={styles.buttonText}>ADD</Text>
                    </Button>
                </View>
            </Popup>
        );
    };

    const addAnnouncementButton = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Button
                    onPress={() =>
                        setAddAnnouncementModalVisibile(true)
                    }
                >
                    <Text style={styles.buttonText}>
                        ADD ANNOUNCEMENT
                    </Text>
                </Button>
            </View>
        );
    };

    const displayAnnouncements = () => {
        return announcements.map((announcement, ind) => {
            const announcementDate = new Date(announcement.createdAt);
            const day = announcementDate.getDate();
            const month = announcementDate.getMonth() + 1;
            const year = announcementDate
                .getFullYear()
                .toString()
                .slice(-2);
            const dateString = `${month}/${day}/${year}`;

            let announcementBody = announcement.body;
            if (announcementBody.length > 250) {
                announcementBody = `${announcementBody.substring(
                    0,
                    250,
                )} ...`;
            }

            const containerStyle =
                ind === announcements.length - 1
                    ? styles.announcementContainerLast
                    : styles.announcementContainer;

            return (
                <TouchableOpacity key={announcement._id}>
                    <View style={containerStyle}>
                        <Text style={styles.announcementTitle}>
                            {announcement.user.firstName}:{' '}
                            {announcement.title}
                        </Text>
                        <Text style={styles.announcementBody}>
                            {announcementBody}
                        </Text>
                        <Text style={styles.announcementDate}>
                            {dateString}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        });
    };

    return (
        <ScrollView style={styles.screen}>
            {isAdmin && addAnnouncementButton()}
            {addAnnouncementModalVisible && addAnnouncementModal()}
            {announcements && displayAnnouncements()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '900',
        textAlign: 'center',
    },
    popupContent: {
        width: '100%',
        alignItems: 'center',
    },
    modalClose: {
        position: 'absolute',
        right: 15,
        top: 5,
    },
    textAreaContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        width: '90%',
    },
    textArea: {
        height: 150,
        justifyContent: 'flex-start',
    },
    announcementContainer: {
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    announcementTitle: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '700',
    },
    announcementBody: {
        marginVertical: 10,
        lineHeight: 25,
    },
    announcementDate: {
        fontWeight: '800',
    },
    announcementContainerLast: {
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 30,
    },
});

export default ClubAnnouncementsScreen;
