import produce from "immer"

const initialState = {
    friends: [],
    totalCount: null,
    isLoader:false
}

const friends= (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_FRIENDS':
                draft.friends = action.users.items
                draft.totalCount = action.users.totalCount
                break
            case 'SET_LOADER':
                draft.isLoader = action.isLoader
                break
            default:
                return state
    }
    })
}

export default friends