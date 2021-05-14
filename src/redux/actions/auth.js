export const setAuthUserData = (data,isAuth) => ({
    type: 'SET_USER_DATA',
    data,
    isAuth
});

export const setAuthError = (error) => ({
    type: 'SET_ERROR',
    error
});



