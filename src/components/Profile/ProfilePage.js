import React, {useEffect, useState} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import AvatarCard from "./AvatarCard/AvatarCard";
import {
    getProfile,
    getProfileFriends,
    getProfileGroupsList,
    getProfileIncomingRequests
} from "../../reducers/profile-reducer";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import Preloader from "../Preloader/Preloader";
import {
    applyIncomingRequest,
    cancelIncomingRequest,
    getFriends,
    getIncomingRequests, removeFromFriends, sendIncomingRequest, stopIncomingRequest
} from "../../reducers/friends-reducer";
import LinksCardContainer from "./LinksCard/LinksCard";
import ProfileInfoPage from "./ProfileInfoPage/ProfileInfoPage";
import {getUserGroupsList} from "../../reducers/users-reducer";

const ProfilePage = (props) => {
    const location = useLocation();
    const userId = location.pathname.split("/")[2]
    const [error, setError] = useState()

    const checkIsFriend = () => {
        props.friendsList.forEach(friend => {
            if (friend.username === props.profileInfo.username) {
                return true
            }
        })
    }

    const getAllInfo = () => {
        props.getProfile(userId)
            .then(response => {
                if (response.statusCode !== 200) {
                    setError(response.message)
                }
            })
        props.getProfileIncomingRequests(userId)
        props.getIncomingRequests(props.loggedUserInfo.username)
        props.getFriends(props.loggedUserInfo.username)
        props.getProfileFriends(userId)
        props.getUserGroupsList(userId)
        props.getProfileGroupsList(userId)
    }

    useEffect(() => {
        getAllInfo()
    }, [userId])

    if (error) return <div>Пользователя с данным именем не существует.</div>
    if (!props.profileInfo || !props.friendsList || !props.profileFriends || !props.profileIncomingRequests) return <Preloader/>
    if (!(props.profileInfo.username === userId)) return <Preloader/>

    return (
        <div className="container">
            <h1>Профиль</h1>
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <AvatarCard username={props.profileInfo.username} status={props.profileInfo.status}
                                    address={props.profileInfo.address} avatar={props.profileInfo.croppedAvatarUrl}
                                    loggedUserInfoUsername={props.loggedUserInfo.username}
                                    incomingRequests={props.incomingRequests} profileFriends={props.profileFriends}
                                    sendIncomingRequest={props.sendIncomingRequest}
                                    stopIncomingRequest={props.stopIncomingRequest}
                                    cancelIncomingRequest={props.cancelIncomingRequest}
                                    applyIncomingRequest={props.applyIncomingRequest}
                                    removeFromFriends={props.removeFromFriends} profileIncomingRequests={props.profileIncomingRequests}
                        getAllInfo={getAllInfo}/>
                        <LinksCardContainer website={props.profileInfo.website} github={props.profileInfo.github}
                                   facebook={props.profileInfo.facebook} instagram={props.profileInfo.instagram}
                                   twitter={props.profileInfo.twitter} publicSettings={props.profileInfo.publicSettings}
                                   loggedUserInfoUsername={props.loggedUserInfo.username} username={props.profileInfo.username}
                                   isFriend={checkIsFriend} profileFriends={props.profileFriends} profile={props.profileInfo}/>
                    </div>
                    <div className="col-md-8">
                        <ProfileInfoPage loggedUserInfoUsername={props.loggedUserInfo.username} username={props.profileInfo.username}
                                         sex={props.profileInfo.sex} address={props.profileInfo.address}
                                         birthday={props.profileInfo.birthday} email={props.profileInfo.email}
                                         fullname={props.profileInfo.fullName}
                                         phoneNumber={props.profileInfo.phoneNumber}
                                         publicSettings={props.profileInfo.publicSettings}
                                         isFriend={checkIsFriend}
                                         profileFriends={props.profileFriends}
                                         profile={props.profileInfo}
                                         profileGroupsList={props.profileGroupsList}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        loggedUserInfo: state.auth.loggedUserInfo,
        profileInfo: state.profile.profileInfo,
        profileFriends: state.profile.profileFriends,
        friendsList: state.friends.friendsList,
        incomingRequests: state.friends.incomingRequests,
        profileIncomingRequests: state.profile.profileIncomingRequests,
        profileGroupsList: state.profile.groupsList,
        userGroupsList: state.users.groupsList
    }
}

const ProfileContainer = compose(
    connect(mapStateToProps, {
        getProfile,
        sendIncomingRequest,
        stopIncomingRequest,
        getFriends,
        cancelIncomingRequest,
        applyIncomingRequest,
        removeFromFriends,
        getProfileFriends,
        getIncomingRequests,
        getProfileIncomingRequests,
        getUserGroupsList,
        getProfileGroupsList
    }),
    withAuthRedirect
)(ProfilePage)

export default ProfileContainer;
