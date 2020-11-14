import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

const Popup = (props) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
        >
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(100,100,100, 0.5)',
                    padding: 20,
                }}
            >
                <View style={styles.modalView}>{props.children}</View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default Popup;
