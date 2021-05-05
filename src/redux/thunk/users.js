import { follow, setLoader, setUsers,unFollow } from '../actions/users'
import {instance} from './api'

export const fetchUsers = (page=1) => {
    return dispatch => {
        dispatch(setLoader(false));
        instance.get(`users?page=${page}&count=20`)
        .then((response) => {
            dispatch(setLoader(true));
            dispatch(setUsers(response.data,page));
        });
        }
}

export const followTH = (userId) => {
    return dispatch => {
        instance.post(`follow/${userId}`)
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
        })
        }
}

export const unFollowTH = (userId) => {
    
    return dispatch => {
        instance.delete(`follow/${userId}`)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
        });
        }
}

