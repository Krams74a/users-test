import {authAPI} from "../api/api";

let initialState = {
    userInfo: []
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const registration = (username, password) => async (dispatch) => {
    let data = await authAPI.registration(username, password)
}

export const login = (username, password) => async (dispatch) => {
    let data = await authAPI.login(username, password)
    localStorage.setItem("token", data.token)
}

export default authReducer;
