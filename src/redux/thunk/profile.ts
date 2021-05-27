import { setLoader } from '../actions/users'
import {instance} from './api'
import { setProfileLoader, setStatus, setUserProfile } from '../actions/profile';

export const fetchProfile = (userId:number) => {
    return (dispatch:any) => {
        dispatch(setLoader(false));
        instance
        .get(`profile/${userId}`)
            .then((response) => {
            dispatch(setLoader(true));
            dispatch(setUserProfile(response.data));
        });
        }
}

export const fetchProfileStatus = (userId:number) => {
    return (dispatch:any )=> {
        dispatch(setProfileLoader(true))
        instance
        .get(`profile/status/${userId}`)
            .then((response) => {
            dispatch(setProfileLoader(false))
            dispatch(setStatus(response.data));
        });
        }
}

export const changeProfileStatus = (status:string) => {
    return (dispatch:any) => {
        instance
        .put(`profile/status`,{status})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
            }
        });
        }
}