import { follow, setLoader, setUsers,unFollow } from '../actions/users'
import {instance} from './api'

export const fetchUsers = (page=1) => {
    return (dispatch:any) => {
        dispatch(setLoader(false));
        instance.get(`users?page=${page}&count=20`)
        .then((response) => {
            dispatch(setLoader(true));
            dispatch(setUsers(response.data,page));
        });
        }
}

export const followTH = (userId:number) => {
    return (dispatch:any) => {
        instance.post(`follow/${userId}`)
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
        })
        }
}

export const unFollowTH = (userId:number) => {
    
    return (dispatch:any) => {
        instance.delete(`follow/${userId}`)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
        });
        }
}

