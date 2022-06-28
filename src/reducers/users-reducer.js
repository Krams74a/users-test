import {usersAPI} from "../api/api"

const SET_USERS = "users/SET_USERS"

let initialState = {
    usersList: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersList: [...action.users]
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})

export const getUsers = () => async (dispatch) => {
    let data = await usersAPI.getUsers()
    dispatch(setUsers(data))
}

export default usersReducer;
