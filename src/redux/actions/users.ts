import { UsersType } from './../types.ts/type';
type setUsersType = {
    type: 'SET_USERS'
    users: UsersType
    currentPage: number
}

export const setUsers = (users:UsersType, currentPage:number):setUsersType => ({
    type: 'SET_USERS',
    users,
    currentPage
})

type setLoaderType = {
    type: 'SET_LOADER'
    isLoader: boolean
}
export const setLoader = (isLoader:boolean):setLoaderType => ({
    type: 'SET_LOADER',
    isLoader
})

type followType = {
    type: 'FOLLOW'
    userId: number
}
export const follow = (userId:number):followType => ({
    type: 'FOLLOW',
    userId
})

type unFollowType = {
    type: 'UN_FOLLOW'
    userId: number
}
export const unFollow = (userId:number):unFollowType => ({
    type: 'UN_FOLLOW',
    userId
})

export type UsersActionTypes = setUsersType | setLoaderType | followType | unFollowType


