import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import usersReducer from "./reducers/users-reducer";


let reducers = combineReducers({
    users: usersReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;
