import { combineReducers } from 'redux';
import authReducer from './auth';
import clubsReducer from './clubs';

export default combineReducers({
    auth: authReducer,
    clubs: clubsReducer,
});
