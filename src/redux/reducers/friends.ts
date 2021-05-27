import produce from "immer"
import { FriendsType } from "../actions/friends"
import { UserType } from "../types.ts/type"

type initialStateType = {
    friends: Array<UserType>,
    totalCount: number | null,
    isLoader:boolean
}
const initialState:initialStateType = {
    friends: [],
    totalCount: null,
    isLoader:false
}

const friends= (state = initialState, action:FriendsType):initialStateType => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_FRIENDS':
                draft.friends = action.users.items
                draft.totalCount = action.users.totalCount
                break
            case 'SET_LOADER':
                draft.isLoader = action.isLoader
                break
            default:
                return state
    }
    })
}

export default friends