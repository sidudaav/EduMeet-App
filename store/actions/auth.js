export const LOG_IN = 'LOG_IN';
export const ADD_SCHOOL = 'ADD_SCHOOL';

export const login = (userId) => {
    return {
        type: LOG_IN,
        userId: userId,
    };
};

export const addSchool = (schoolId) => {
    return {
        type: ADD_SCHOOL,
        schoolId: schoolId,
    };
};
