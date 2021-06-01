import produce from "immer"
import moment from 'moment';
import { ProFileActionTypes } from "../actions/profile";
import { PostsType, ProfileType } from "../types.ts/type";

type InitialStateType = {
    postsData: Array<PostsType>
    profile: ProfileType | null,
    status:string | null,
    nextIndex: number,
    isLoader: boolean,
}

const initialState:InitialStateType = {
    postsData: [
        { id: 0, post: 'Hello world, Today', countLike: 1245,isLiked:false,data:'April 10, 2021'},
    ],
    profile: null,
    status:'',
    nextIndex: 2,
    isLoader: false,
}

const profile = (state = initialState, action:ProFileActionTypes): InitialStateType => {
    return produce(state, draft => {
        switch (action.type) {
            case 'ADD_POST':
                const newPost = {
                    id: draft.nextIndex++,
                    post: action.post,
                    countLike: 0,
                    isLiked: false,
                    data:moment().format('LL')
                }
                draft.postsData.unshift(newPost)
                break
            case 'DELETE_POST':
                draft.postsData.splice(action.index,1)
                break
            case 'SET_STATUS':
                draft.status = action.status
                break
            case 'PUT_LiKE':
                const post = draft.postsData[action.index]
                if(!post.isLiked){
                    post.countLike = ++post.countLike
                    post.isLiked = true
                } else {
                    post.countLike = --post.countLike
                    post.isLiked = false
                }
                break
            case 'PUT_USER_PROFILE':
                draft.profile = action.profile
                break
            case 'SET_PROFILE_LOADER':
                draft.isLoader = action.loader
                break
            case 'SET_PHOTO':
                if (draft.profile) {
                  draft.profile.photos = action.photos  
                }
                break
            default:
                return state
    }
    })
}

export default profile