import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';

const deviceStorage = {
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async loadJWT() {
        try {
            const value = await AsyncStorage.getItem('jwt');

            if (!value) {
                return [null, true];
            }

            const decodedValue = jwt_decode(value);
            let expired = false;
            if (Date.now() >= decodedValue.exp * 1000) {
                expired = true;
            }

            return [value, expired];
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async loadSchool() {
        try {
            const school = await AsyncStorage.getItem('school');

            return school;
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
};

export default deviceStorage;
