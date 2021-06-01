import { UsersActionTypes } from './../actions/users';
import { ThunkAction } from 'redux-thunk'
import { follow, setLoader, setUsers,unFollow } from '../actions/users'
import { AppStateType } from '../store'
import {instance} from './api'

type Thunktype = ThunkAction<void, AppStateType, unknown, UsersActionTypes>

export const fetchUsers = (page=1):Thunktype => {
    return (dispatch) => {
        dispatch(setLoader(false));
        instance.get(`users?page=${page}&count=20`)
        .then((response) => {
            dispatch(setLoader(true));
            dispatch(setUsers(response.data,page));
        });
        }
}

export const followTH = (userId:number):Thunktype => {
    return (dispatch) => {
        instance.post(`follow/${userId}`)
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
        })
        }
}

export const unFollowTH = (userId:number):Thunktype => {
    
    return (dispatch) => {
        instance.delete(`follow/${userId}`)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
        });
        }
}

