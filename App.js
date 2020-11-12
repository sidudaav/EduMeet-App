import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import 'react-native-gesture-handler';

import MainNavigator from './navigation/MainNavigator';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers/index';

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
}
