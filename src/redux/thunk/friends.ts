import { FriendsActionType, setFriends, setLoader } from '../actions/friends'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../store'
import { friendsAPI } from '../../api/api'

type ThunkType = ThunkAction<void,AppStateType,unknown,FriendsActionType>

export const getFriends = ():ThunkType=> {
    return (dispatch) => {
        dispatch(setLoader(true))
        friendsAPI.getFriends()
            .then((data) => {
                dispatch(setLoader(false))
                dispatch(setFriends(data));
        });
        }
}


