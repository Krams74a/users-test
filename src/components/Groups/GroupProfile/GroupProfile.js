import React, {useEffect, useState} from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {useLocation} from "react-router";
import Preloader from "../../Preloader/Preloader";
import {
    deleteGroupAvatar, follow,
    getGroupProfile, unfollow, updateGroupAvatar,
    updateGroupProfile,
    uploadGroupAvatar
} from "../../../reducers/groupProfile-reducer";
import GroupAvatarCard from "./GroupAvatarCard/GroupAvatarCard";
import GroupProfileInfoPageContainer from "./GroupInfoPage/GroupInfoPage";
import {NavLink} from "react-router-dom";

const GroupProfile = (props) => {
    const location = useLocation();
    const groupId = location.pathname.split("/")[2]
    const [error, setError] = useState()

    const checkIsMember = () => {
        let isMember = false
        props.groupProfileInfo.membersList.forEach(member => {
            if (member.username === props.loggedUserInfo.username) {
                isMember = true
            } else {
                isMember = false
            }
        })
        return isMember
    }

    const getAllInfo = () => {
        props.getGroupProfile(groupId)
            .then(response => {
                console.log(response)
                if (response.statusCode !== 200) {
                    setError(response.message)
                }
            })
    }

    useEffect(() => {
        getAllInfo()
    }, [groupId])
    if (error) return <div>Группы с данным именем не существует.</div>
    if (!props.groupProfileInfo) return <Preloader/>

    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <GroupAvatarCard groupAuthor={props.groupProfileInfo.groupAuthor} getAllInfo={getAllInfo} username={props.loggedUserInfo.username} isMember={checkIsMember()} follow={props.follow} unfollow={props.unfollow} groupDescription={props.groupProfileInfo.groupDescription} groupAvatar={props.groupProfileInfo.groupCroppedAvatarUrl} groupName={props.groupProfileInfo.groupName}/>
                    </div>
                    <div className="col-md-8">
                        <GroupProfileInfoPageContainer groupDescription={props.groupProfileInfo.groupDescription}
                                                       groupName={props.groupProfileInfo.groupName} groupAuthor={props.groupProfileInfo.groupAuthor}
                                                       loggedUserInfoUsername={props.loggedUserInfoUsername} groupMembers={props.groupProfileInfo.membersList}/>
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
        groupProfileInfo: state.groupProfile.groupProfileInfo
    }
}

const GroupProfileContainer = compose(
    connect(mapStateToProps, {getGroupProfile, updateGroupProfile, uploadGroupAvatar, updateGroupAvatar, deleteGroupAvatar, follow, unfollow}),
    withAuthRedirect
)(GroupProfile)

export default GroupProfileContainer;
