export const setUsers = (users,currentPage) => ({
    type: 'SET_USERS',
    users,
    currentPage
})

export const setLoader = (isLoader) => ({
    type: 'SET_LOADER',
    isLoader
})

export const follow = (userId) => ({
    type: 'FOLLOW',
    userId
})

export const unFollow = (userId) => ({
    type: 'UN_FOLLOW',
    userId
})


