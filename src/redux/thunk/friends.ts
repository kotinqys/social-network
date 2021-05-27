import { instance } from './api'
import {setFriends, setLoader} from '../actions/friends'

export const getFriends = () => {
    return (dispatch:any) => {
        dispatch(setLoader(true))
        instance.get(`users?friend=true`)
            .then((response) => {
                dispatch(setLoader(false))
                dispatch(setFriends(response.data));
        });
        }
}


