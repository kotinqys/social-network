import { applyMiddleware, combineReducers, createStore } from "redux";
import profile from './reducers/profile'
import auth from './reducers/auth'
import users from './reducers/users'
import friends from './reducers/friends'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    profile,
    auth,
    users,
    friends,
    form:formReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default store;