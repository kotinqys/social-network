import { ProFileActionTypes} from './../actions/profile';
import {instance} from './api'
import { setProfileLoader, setStatus, setUserProfile,setPhoto } from '../actions/profile';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store';


type ThunkType = ThunkAction<void, AppStateType, unknown, ProFileActionTypes>

export const fetchProfile = (userId:number):ThunkType => {
    return (dispatch) => {
        dispatch(setProfileLoader(true));
        instance
        .get(`profile/${userId}`)
            .then((response) => {
            dispatch(setProfileLoader(false));
            dispatch(setUserProfile(response.data));
        });
        }
}

export const fetchProfileStatus = (userId:number):ThunkType => {
    return (dispatch )=> {
        dispatch(setProfileLoader(true))
        instance
        .get(`profile/status/${userId}`)
            .then((response) => {
            dispatch(setProfileLoader(false))
            dispatch(setStatus(response.data));
        });
        }
}

export const changeProfileStatus = (status:string):ThunkType => {
    return (dispatch) => {
        instance
        .put(`profile/status`,{status})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
            }
        });
        }
}

export const savePhoto = (photos:any):ThunkType => {
    return (dispatch) => {
        const formData = new FormData()
        formData.append('image',photos)
        instance
            .put(`profile/photo`, formData, {
                 headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setPhoto(response.data.data.photos));
            }
            })
    };
}