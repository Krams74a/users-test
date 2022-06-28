import {profileAPI} from "../api/api"

const SET_PROFILE = "profile/SET_PROFILE"

let initialState = {
    profileInfo: {}
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profileInfo: action.profile
            }
        default:
            return state
    }
}

export const setProfile = (profile) => ({type: SET_PROFILE, profile})

export const getProfile = (id) => async (dispatch) => {
    let data = await profileAPI.getProfile(id)
    dispatch(setProfile(data.data))
}

export default profileReducer;
