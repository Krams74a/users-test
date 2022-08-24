import {usersAPI} from "../api/api"
import {logout} from "./auth-reducer";

const SET_USERS = "users/SET_USERS"
const SET_PAGES_INFO = "users/SET_PAGES_INFO"

let initialState = {
    usersList: [],
    pagesInfo: {limit: 2,
        nextPage: 2,
        page: 1,
        prevPage: null,
        totalPages: null}
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersList: [...action.users]
            }
        case SET_PAGES_INFO:
            return {
                ...state,
                pagesInfo: action.pagesInfo
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setPagesInfo = (pagesInfo) => ({type: SET_PAGES_INFO, pagesInfo})

export const getUsers = (page, perPage) => async (dispatch) => {
    let data = await usersAPI.getUsers(page, perPage)
    dispatch(setUsers(data.docs))
    data.docs = {}
    const pagesInfo = {
        limit: data.limit,
        nextPage: data.nextPage,
        page: data.page,
        prevPage: data.prevPage,
        totalPages: data.totalPages
    }
    dispatch(setPagesInfo(pagesInfo))
}

export const deleteUser = (id) => async (dispatch) => {
    let data = await usersAPI.deleteUser(id)
    dispatch(logout())
}

export default usersReducer;
