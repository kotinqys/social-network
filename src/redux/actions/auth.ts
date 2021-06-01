type Data = {
    id: number
    email: string
    login : string
}

type SetAuthUserDataType = {
    type: 'SET_USER_DATA',
    data: Data,
    isAuth: boolean
}

export const setAuthUserData = (data:any, isAuth:boolean):SetAuthUserDataType => ({
    type: 'SET_USER_DATA',
    data,
    isAuth
});

type SetAuthErrorType = {
    type: 'SET_ERROR',
    error:boolean
}
export const setAuthError = (error:boolean):SetAuthErrorType => ({
    type: 'SET_ERROR',
    error
});

export type AuthActionsType = SetAuthUserDataType | SetAuthErrorType



