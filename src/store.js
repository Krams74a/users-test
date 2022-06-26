import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import postsReducer from "./reducers/posts-reducer";
import authReducer from "./reducers/auth-reducer";


let reducers = combineReducers({
    users: postsReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;
