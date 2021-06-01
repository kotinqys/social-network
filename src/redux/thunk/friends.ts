import { instance } from './api'
import { FriendsActionType, setFriends, setLoader } from '../actions/friends'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../store'

type ThunkType = ThunkAction<void,AppStateType,unknown,FriendsActionType>

export const getFriends = ():ThunkType=> {
    return (dispatch) => {
        dispatch(setLoader(true))
        instance.get(`users?friend=true`)
            .then((response) => {
                dispatch(setLoader(false))
                dispatch(setFriends(response.data));
        });
        }
}


