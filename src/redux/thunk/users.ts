import { usersAPI } from './../../api/api';
import { UsersActionTypes } from './../actions/users';
import { ThunkAction } from 'redux-thunk'
import { follow, setLoader, setUsers,unFollow } from '../actions/users'
import { AppStateType } from '../store'

type Thunktype = ThunkAction<void, AppStateType, unknown, UsersActionTypes>

export const fetchUsers = (page=1):Thunktype => {
    return (dispatch) => {
        dispatch(setLoader(false));
        usersAPI.getUsers(page)
        .then((data) => {
            dispatch(setLoader(true));
            dispatch(setUsers(data,page));
        });
        }
}

export const followTH = (userId:number):Thunktype => {
    return (dispatch) => {
        usersAPI.follow(userId)
            .then(data => {
            if (data.resultCode === 0) {  
                dispatch(follow(userId))
            }
        })
        }
}

export const unFollowTH = (userId:number):Thunktype => {
    
    return (dispatch) => {
        usersAPI.unFollow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
        });
        }
}

