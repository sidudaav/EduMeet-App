export const SET_CURRENT_CLUB = 'SET_CURRENT_CLUB';

export const setCurrentClub = (club) => {
    return {
        type: SET_CURRENT_CLUB,
        currentClub: club,
    };
};
