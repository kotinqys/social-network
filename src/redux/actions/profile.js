export const addPost = (post) => ({
    type: 'ADD_POST',
    post
})

export const deletePost = (index) => ({
    type: 'DELETE_POST',
    index
})

export const putLikeToPost = (index) => ({
    type: 'PUT_LiKE',
    index
})

export const setUserProfile = (profile) => ({
    type: 'PUT_USER_PROFILE',
    profile
})

export const setStatus = (status) => ({
    type: 'SET_STATUS',
    status
})

export const setProfileLoader = (loader) => ({
    type: 'SET_PROFILE_LOADER',
    loader
})



