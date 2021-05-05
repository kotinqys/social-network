import { setLoader } from '../actions/users'
import {instance} from './api'
import { setProfileLoader, setStatus, setUserProfile } from '../actions/profile';

export const fetchProfile = (userId) => {
    return dispatch => {
        dispatch(setLoader(false));
        instance
        .get(`profile/${userId}`)
            .then((response) => {
            dispatch(setLoader(true));
            dispatch(setUserProfile(response.data));
        });
        }
}

export const fetchProfileStatus = (userId) => {
    return dispatch => {
        dispatch(setProfileLoader(true))
        instance
        .get(`profile/status/${userId}`)
            .then((response) => {
            dispatch(setProfileLoader(false))
            dispatch(setStatus(response.data));
        });
        }
}

export const changeProfileStatus = (status) => {
    return dispatch => {
        instance
        .put(`profile/status`,{status})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
            }
        });
        }
}