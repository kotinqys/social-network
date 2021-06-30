import { UserType, ProfileType } from './../redux/types.ts/type';
import axios from 'axios'


export const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '91276776-a919-4d16-9f54-22659fce0a08',
        'Content-Type': 'multipart/form-data'
    }
});

type UsersData = {
    items:Array<UserType>
    totalCount: number
    error: string
}

type FollowData = {
    resultCode: number
    messages : Array<string>
    data: {}
}

type AuthMeData = {
    resultCode: number
    messages : Array<string>
    data: {
        id:number
        email:string
        login:string
    }
}

export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10){
        return instance.get<UsersData>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>response.data)
    },
    follow(userId:number){
        return instance.post<FollowData>(`follow/${userId}`)
        .then(response=>response.data)
    },
    unFollow(userId:number){
        return instance.delete<FollowData>(`follow/${userId}`)
        .then(response=>response.data)
    },
    getAuthMe(){
        return instance.get<AuthMeData>(`auth/me`)
        .then(response=>response.data)
    }
}

export const friendsAPI = {
    getFriends(){
        return instance.get<UsersData>(`users?friend=true`)
        .then(response=>response.data)
    }
}

type ProfileStatusData = {
    resultCode: number
    messages : Array<string>
    data: {}
}


type LoginData = {
    resultCode: number
    messages : Array<string>
    data: {} | {
        userId: number
    }
}
type ProfilePhotoData = {
    resultCode: number
    messages : Array<string>
    data: {
        photos:{
            large: string
            small: string
        }
    }
}
export const profileAPI = {
    getProfileUserId(userId:number){
        return instance.get<ProfileType>(`profile/${userId}`)
        .then(response=>response.data)
    },
    getAuthMe(){
        return instance.get<AuthMeData>(`auth/me`)
        .then(response=>response.data)
    },
    getProfileStatus(userId:number){
        return instance.get(`profile/status/${userId}`)
        .then(response=> response.data)
    },
    updateProfileStatus(status:string){
        return instance.put<ProfileStatusData>(`profile/status`,{status})
        .then(response=>response.data)
    },
    login(email:string,password:string,rememberMe:boolean){
        return instance.post<LoginData>(`auth/login`,{email,password,rememberMe})
        .then(response=>response.data)
    },
    logout(){
        return instance.delete<LoginData>(`auth/login`)
        .then(response=>response.data)
    },
    updatePhoto(formData:any){
        return instance.put<ProfilePhotoData>(`profile/photo`, formData)
        .then(response=>response.data)
    }
}

