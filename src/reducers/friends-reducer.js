import {friendsAPI} from "../api/api"

const SET_FRIENDS = "profile/SET_FRIENDS"

let initialState = {
    friendsList: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friendsList: action.friendsList
            }
        default:
            return state
    }
}

export const setFriendsList = (friendsList) => ({type: SET_FRIENDS, friendsList})

export const getFriends = (userId) => async (dispatch) => {
    let response = await friendsAPI.getFriends(userId)
    if (response.status === 200) {
        dispatch(setFriendsList(response.data))
    } else {
        return response.data.message
    }
}

export const addFriend = (friendId, userId) => async (dispatch) => {
    let response = await friendsAPI.addFriend(friendId, userId)
    if (response.status === 200) {
        dispatch(getFriends(userId))
    } else {
        return response.data.message
    }
}

export const deleteFriend = (friendId, userId) => async (dispatch) => {
    let response = await friendsAPI.deleteFriend(friendId, userId)
    if (response.status === 200) {
        dispatch(getFriends(userId))
    } else {
        return response.data.message
    }
}

export default friendsReducer;
