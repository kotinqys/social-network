import produce from 'immer'
import { UsersTypes } from '../actions/users'
import { UserType } from '../types.ts/type'

type InitialStateType = {
    users: Array<UserType>,
    pageSize:number,
    totalUsersCount:number,
    currentPage: number,
    isLoader:boolean
}
let initialState:InitialStateType = {
    users: [],
    pageSize:20,
    totalUsersCount:0,
    currentPage: 1,
    isLoader:false
}

const users = (state = initialState, action:UsersTypes) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_USERS':
                draft.users = action.users.items
                draft.totalUsersCount = action.users.totalCount
                draft.isLoader = true
                if (action.currentPage) {
                    draft.currentPage = action.currentPage
                }
                break
            case 'SET_LOADER':
                draft.isLoader = action.isLoader
                break
            case 'FOLLOW':
                draft.users.map(user => {
                    if (user.id === action.userId) {
                        return user.followed = true
                    } else {
                        return user
                    }
                })
                break
            case 'UN_FOLLOW':
                draft.users.map(user => {
                    if (user.id === action.userId) {
                        return user.followed = false
                    }else {
                        return user
                    }
                })
                break
            default:
                return state
        }
    })
}

export default users;