import { ProFileActionTypes} from './../actions/profile';
import { setProfileLoader, setStatus, setUserProfile,setPhoto } from '../actions/profile';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store';
import { profileAPI } from '../../api/api';


type ThunkType = ThunkAction<void, AppStateType, unknown, ProFileActionTypes>

export const fetchProfile = (userId:number):ThunkType => {
    return (dispatch) => {
        dispatch(setProfileLoader(true));
        profileAPI.getProfileUserId(userId)
            .then((data) => {
            dispatch(setProfileLoader(false));
            dispatch(setUserProfile(data));
        });
        }
}

export const fetchProfileStatus = (userId:number):ThunkType => {
    return (dispatch )=> {
        dispatch(setProfileLoader(true))
        profileAPI.getProfileStatus(userId)
            .then((data) => {
            dispatch(setProfileLoader(false))
            dispatch(setStatus(data));
        });
        }
}

export const changeProfileStatus = (status:string):ThunkType => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
            }
        });
        }
}

export const savePhoto = (photos:any):ThunkType => {
    return (dispatch) => {
        const formData = new FormData()
        formData.append('image',photos)
        profileAPI.updatePhoto(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setPhoto(data.data.photos));
            }
            })
    };
}