import produce from "immer"

let initialState = {
    id: null,
    login:null,
    email:null,
    isAuth : false,
}

const auth = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_USER_DATA':
                draft.id = action.data.id
                draft.login = action.data.login
                draft.email = action.data.email
                draft.isAuth = action.isAuth
                break
            default:
                return state
        }
    })
}


export default auth