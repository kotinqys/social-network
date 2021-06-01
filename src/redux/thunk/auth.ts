import { ThunkAction } from 'redux-thunk';
import { AuthActionsType, setAuthError, setAuthUserData } from '../actions/auth'
import { AppStateType } from '../store';
import {instance} from './api'

type ThunkType = ThunkAction<void,AppStateType,unknown,AuthActionsType>

export const fetchAuth = ():ThunkType => {
    return (dispatch) => {
        instance
            .get(`auth/me`)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data,true));
                }
        });
        }
}

export const login = (data:any):ThunkType => {
    const { email, password, rememberMe } = data
    return (dispatch) => {
        instance
            .post(`auth/login`,{email,password,rememberMe})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(fetchAuth());
                } else {
                    dispatch(setAuthError(true))
                }
        });
        }
}

export const logout = ():ThunkType => {
    return (dispatch)=> {
        instance
            .delete(`auth/login`)
            .then((response) => {
                if (response.data.resultCode === 0) {
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