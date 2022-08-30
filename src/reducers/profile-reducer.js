import {friendsAPI, profileAPI, usersAPI} from "../api/api"
import {isAuth} from "./auth-reducer";
import {setGroupsList} from "./users-reducer";

const SET_PROFILE = "profile/SET_PROFILE"
const SET_PROFILE_FRIENDS = "profile/SET_PROFILE_FRIENDS"
const SET_PROFILE_GROUPS_LIST = "profile/SET_PROFILE_GROUPS_LIST"
const SET_PROFILE_INCOMING_REQUESTS = "profile/SET_PROFILE_INCOMING_REQUESTS"
const SET_PROFILE_AVATAR = "profile/SET_PROFILE_AVATAR"

let initialState = {
    profileInfo: null,
    profileFriends: [],
    profileIncomingRequests: [],
    profileId: "",
    profileAvatar: null,
    groupsList: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profileInfo: action.profile
            }
        case SET_PROFILE_GROUPS_LIST:
            return {
                ...state,
                groupsList: [...action.groupsList]
            }
        case SET_PROFILE_FRIENDS:
            return {
                ...state,
                profileFriends: action.profileFriends
            }
        case SET_PROFILE_INCOMING_REQUESTS:
            return {
                ...state,
                profileIncomingRequests: action.profileIncomingRequests
            }
        case SET_PROFILE_AVATAR:
            return {
                ...state,
                profileAvatar: action.profileAvatar
            }
        default:
            return state
    }
}

export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setProfileGroupsList = (groupsList) => ({type: SET_PROFILE_GROUPS_LIST, groupsList})
export const setProfileFriends = (profileFriends) => ({type: SET_PROFILE_FRIENDS, profileFriends})
export const setProfileIncomingRequests = (profileIncomingRequests) => ({type: SET_PROFILE_INCOMING_REQUESTS, profileIncomingRequests})
export const setProfileAvatar = (profileAvatar) => ({type: SET_PROFILE_AVATAR, profileAvatar})

export const getProfile = (id) => async (dispatch) => {
    let response = await profileAPI.getProfile(id)
    if (response.status === 200) {
        dispatch(setProfile(response.data))
        return {statusCode: response.status}
    } else {
        return {statusCode: response.status,
        message: response.data.message}
    }
}

export const getProfileGroupsList = (username) => async (dispatch) => {
    let data = await usersAPI.getUserGroupsList(username)
    dispatch(setProfileGroupsList(data))
}

export const getProfileFriends = (id) => async (dispatch) => {
    let response = await friendsAPI.getFriends(id)
    if (response.status === 200) {
        dispatch(setProfileFriends(response.data))
    } else {
        return response.data.message
    }
}

export const getProfileIncomingRequests = (id) => async (dispatch) => {
    let response = await friendsAPI.getIncomingRequests(id)
    if (response.status === 200) {
        dispatch(setProfileIncomingRequests(response.data))
    } else {
        return response.data.message
    }
}

export const updateProfile = (profile) => async (dispatch) => {
    let data = await profileAPI.updateProfile(profile)
    if (data.status !== 200) {
        const response = {
            message: data.data.message,
            status: data.status
        }
        dispatch(setProfile(response.data))
        dispatch(isAuth())
        return response
    } else {
        const response = {
            message: data.data.message,
            status: data.status
        }
        return response
    }
}

export const uploadAvatar = (avatar, id) => async (dispatch) => {
    let data = await profileAPI.uploadAvatar(avatar, id)
    if (data.status !== 200) {
        const response = {
            message: data.data.message,
            status: data.status
        }
        dispatch(getProfile(id))
        return response
    } else {
        const response = {
            message: data.data.message,
            status: data.status
        }
        return response
    }
}

export const updateAvatar = (croppedAvatar, id) => async (dispatch) => {
    let data = await profileAPI.updateAvatar(croppedAvatar, id)
    if (data.status !== 200) {
        const response = {
            message: data.data.message,
            status: data.status
        }
        dispatch(getProfile(id))
        return response
    } else {
        const response = {
            message: data.data.message,
            status: data.status
        }
        return response
    }
}

export const deleteAvatar = (id) => async (dispatch) => {
    let data = await profileAPI.deleteAvatar(id)
    if (data.status !== 200) {
        const response = {
            message: data.data.message,
            status: data.status
        }
        dispatch(getProfile(id))
        return response
    } else {
        const response = {
            message: data.data.message,
            status: data.status
        }
        return response
    }
}

export default profileReducer;
