import { SET_CURRENT_CLUB } from '../actions/clubs';

const initalState = {
    currentClub: null,
};

export default (state = initalState, action) => {
    switch (action.type) {
        case SET_CURRENT_CLUB:
            return {
                ...state,
                currentClub: action.currentClub,
            };
    }

    return state;
};
