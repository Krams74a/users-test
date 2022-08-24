import {friendsAPI, groupsProfileAPI, profileAPI} from "../api/api"
import {isAuth} from "./auth-reducer";

const SET_GROUP_PROFILE = "group/SET_GROUP_PROFILE"
const SET_GROUP_MEMBERS = "group/SET_GROUP_MEMBERS"
const SET_GROUP_PROFILE_AVATAR = "group/SET_GROUP_PROFILE_AVATAR"

let initialState = {
    groupProfileInfo: null,
}

export const groupProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUP_PROFILE:
            return {
                ...state,
                groupProfileInfo: action.groupProfileInfo
            }
        case SET_GROUP_MEMBERS:
            return {
                ...state,
                groupMembers: action.groupMembers
            }
        case SET_GROUP_PROFILE_AVATAR:
            return {
                ...state,
                groupProfileAvatar: action.groupProfileAvatar
            }
        default:
            return state
    }
}

export const setGroupProfile = (groupProfileInfo) => ({type: SET_GROUP_PROFILE, groupProfileInfo})
export const setGroupMembers = (groupMembers) => ({type: SET_GROUP_MEMBERS, groupMembers})
export const setGroupProfileAvatar = (groupProfileAvatar) => ({type: SET_GROUP_PROFILE_AVATAR, groupProfileAvatar})

export const getGroupProfile = (id) => async (dispatch) => {
    let response = await groupsProfileAPI.getGroupProfile(id)
    console.log(response.data)
    if (response.status === 200) {
        dispatch(setGroupProfile(response.data))
    } else {
        return response.data.message
    }
}

export const updateGroupProfile = (profile) => async (dispatch) => {
    let data = await groupsProfileAPI.updateGroupProfile(profile)
    if (data.status !== 200) {
        const response = {
            message: data.data.message,
            status: data.status
        }
        dispatch(setGroupProfile(response.data))
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

export const uploadGroupAvatar = (avatar, id) => async (dispatch) => {
    let data = await groupsProfileAPI.uploadGroupAvatar(avatar, id)
    if (data.status !== 200) {
        const response = {
            message: data.data.message,
            status: data.status
        }
        dispatch(getGroupProfile(id))
        return response
    } else {
        const response = {
            message: data.data.message,
            status: data.status
        }
        return response
    }
}

export const updateGroupAvatar = (croppedAvatar, id) => async (dispatch) => {
    let data = await groupsProfileAPI.updateGroupAvatar(croppedAvatar, id)
    if (data.status !== 200) {
        const response = {
            message: data.data.message,
            status: data.status
        }
        dispatch(getGroupProfile(id))
        return response
    } else {
        const response = {
            message: data.data.message,
            status: data.status
        }
        return response
    }
}

export const deleteGroupAvatar = (id) => async (dispatch) => {
    let data = await groupsProfileAPI.deleteGroupAvatar(id)
    if (data.status !== 200) {
        const response = {
            message: data.data.message,
            status: data.status
        }
        dispatch(getGroupProfile(id))
        return response
    } else {
        const response = {
            message: data.data.message,
            status: data.status
        }
        return response
    }
}

export default groupProfileReducer;
