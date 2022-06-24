import {usersAPI} from "../api/api"

const SET_USERS = "users/SET-USERS"
const ADD_USER = "users/ADD_USER"

let initialState = {
    usersInfo: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersInfo: [...action.users]
            }
        case ADD_USER:
            let newUser = {
                firstName: action.firstName,
                secondName: action.secondName,
                age: action.age
            }
            return {
                ...state,
                usersInfo: [newUser, ...state.usersInfo],
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users: users})
export const addNewUser = (firstName, secondName, age) => ({type: ADD_USER, firstName, secondName, age})

export const getUsers = () => async (dispatch) => {
    let data = await usersAPI.getUsers()
    console.log("get: ", data)
    dispatch(setUsers(data))
}

export const addUser = (firstName, secondName, age) => async (dispatch) => {
    let data = await usersAPI.addUser(firstName, secondName, age)
    dispatch(getUsers())
}

export default usersReducer;
