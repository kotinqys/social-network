import { UsersType } from "../types.ts/type"

type SetFriendsType = {
    type: 'SET_FRIENDS',
    users: UsersType
}

export const setFriends = (users:UsersType):SetFriendsType => ({
    type: 'SET_FRIENDS',
    users
})

type SetLoaderType = {
    type: 'SET_LOADER',
    isLoader: boolean
}
export const setLoader = (isLoader:boolean):SetLoaderType => ({
    type: 'SET_LOADER',
    isLoader
})

export type FriendsActionType = SetFriendsType | SetLoaderType 



