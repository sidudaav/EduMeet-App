import { LOG_IN, ADD_SCHOOL } from '../actions/auth';

const initialState = {
    userId: null,
    schoolId: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                userId: action.userId,
            };

        case ADD_SCHOOL:
            return {
                ...state,
                schoolId: action.schoolId,
            };
    }

    return state;
};
