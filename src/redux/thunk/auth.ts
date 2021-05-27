import { setAuthError, setAuthUserData } from '../actions/auth'
import {instance} from './api'

export const fetchAuth = () => {
    return (dispatch:any) => {
        instance
            .get(`auth/me`)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data,true));
                }
        });
        }
}

export const login = (data:any) => {
    const { email, password, rememberMe } = data
    return (dispatch:any) => {
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

export const logout = () => {
    return (dispatch:any )=> {
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