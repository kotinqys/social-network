import produce from 'immer'

let initialState = {
    users: [],
    pageSize:20,
    totalUsersCount:0,
    currentPage: 1,
    isLoader:false
}

const users = (state = initialState, action) => {
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
                draft.map(user => {
                    if (user.id === action.userId) {
                        return user.followed = true
                    } else {
                        return user
                    }
                })
                break
            case 'UN_FOLLOW':
                draft.map(user => {
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