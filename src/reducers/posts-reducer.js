import {usersAPI} from "../api/api"

const SET_POSTS = "users/SET_POSTS"
const ADD_POST = "users/ADD_POST"
const DELETE_POST = "users/DELETE_POST"

let initialState = {
    usersInfo: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                usersInfo: [...action.users]
            }
        case ADD_POST:
            let newUser = {
                author: action.author,
                title: action.title,
                content: action.content
            }
            return {
                ...state,
                usersInfo: [newUser, ...state.usersInfo],
            }
        case DELETE_POST:
            return {
                ...state,
                usersInfo: state.usersInfo.filter(post => post.id !== action.id)
            }
        default:
            return state
    }
}

export const setPosts = (users) => ({type: SET_POSTS, users: users})
export const addNewPost = (author, title, content) => ({type: ADD_POST, author, title, content})
export const deletePostAction = (id) => ({type: DELETE_POST, id})

export const getPosts = () => async (dispatch) => {
    let data = await usersAPI.getPosts()
    dispatch(setPosts(data))
}

export const addPost = (author, title, content) => async (dispatch) => {
    let data = await usersAPI.addPost(author, title, content)
    dispatch(getPosts())
}

export const deletePost = (id) => async (dispatch) => {
    let data = await usersAPI.deletePost(id)
    dispatch(getPosts())
}

export default postsReducer;
