import { follow } from './../actions/users';

export type PostsType = {
    id: number,
    post: string,
    countLike: number,
    isLiked: boolean,
    data: string
}

export type AuthType = {
    id:number
    login :string
    email : string
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink:string
}

export type PhotosType = {
    small: string | null,
    large: string | null
}

export type ProfileType = {
    userId: number,
    lookingForAJob: string,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType
}

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}

export type UsersType = {
    items: Array<UserType>
    totalCount: number
    error : string | null
}