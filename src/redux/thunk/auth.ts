import { profileAPI } from './../../api/api';
import { ThunkAction } from 'redux-thunk';
import { AuthActionsType, setAuthError, setAuthUserData } from '../actions/auth'
import { AppStateType } from '../store';

type ThunkType = ThunkAction<void,AppStateType,unknown,AuthActionsType>

export const fetchAuth = ():ThunkType => {
    return (dispatch) => {
       profileAPI.getAuthMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data,true));
                }
        });
        }
}

export const login = (data:{email:string,password:string,rememberMe:boolean}):ThunkType => {
    const { email, password, rememberMe } = data
    return (dispatch) => {
        profileAPI.login(email,password,rememberMe)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(fetchAuth());
                } else {
                    dispatch(setAuthError(true))
                }
        });
        }
}

export const logout = ():ThunkType => {
    return (dispatch)=> {
        profileAPI.logout()
            .then((data) => {
                if (data.resultCode === 0) {
                    const data = {
                        id:null,
                        login: null,
                        email:null
                    }
                    dispatch(setAuthUserData(data,false));
                }
        });
        }
}