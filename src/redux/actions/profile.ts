import { ProfileType } from "../types.ts/type"

type AddPostType = {
    type: 'ADD_POST',
    post: string
}

export const addPost = (post:string):AddPostType => ({
    type: 'ADD_POST',
    post
})

type DeletePostType = {
    type: 'DELETE_POST',
    index: number
}

export const deletePost = (index:number):DeletePostType => ({
    type: 'DELETE_POST',
    index
})

type PutLikeToPostType = {
    type: 'PUT_LiKE',
    index: number
}

export const putLikeToPost = (index:number):PutLikeToPostType => ({
    type: 'PUT_LiKE',
    index
})

type SetUserProfileType = {
    type: 'PUT_USER_PROFILE',
    profile: ProfileType
}

export const setUserProfile = (profile:ProfileType):SetUserProfileType => ({
    type: 'PUT_USER_PROFILE',
    profile
})

type setStatusType = {
    type: 'SET_STATUS',
    status: string
}

export const setStatus = (status:string):setStatusType => ({
    type: 'SET_STATUS',
    status
})

type SetProfileLoaderType = {
    type: 'SET_PROFILE_LOADER',
    loader: boolean
}

export const setProfileLoader = (loader:boolean):SetProfileLoaderType => ({
    type: 'SET_PROFILE_LOADER',
    loader
})

type SetPhotoType = {
    type: 'SET_PHOTO',
    photos: any
}

export const setPhoto = (photos:any):SetPhotoType => ({
    type: 'SET_PHOTO',
    photos
})

export type ProFileActionTypes = AddPostType | DeletePostType | PutLikeToPostType | SetUserProfileType | setStatusType | SetProfileLoaderType | SetPhotoType



