import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import postsReducer from "./reducers/posts-reducer";
import authReducer from "./reducers/auth-reducer";
import {appReducer} from "./reducers/app-reducer";
import usersReducer from "./reducers/users-reducer";


let reducers = combineReducers({
    posts: postsReducer,
    auth: authReducer,
    app: appReducer,
    users: usersReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;
