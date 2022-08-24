import React, {useEffect, useState} from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {useLocation} from "react-router";
import Preloader from "../../Preloader/Preloader";
import {
    deleteGroupAvatar,
    getGroupProfile, updateGroupAvatar,
    updateGroupProfile,
    uploadGroupAvatar
} from "../../../reducers/groupProfile-reducer";
import GroupAvatarCard from "./GroupAvatarCard/GroupAvatarCard";
import GroupProfileInfoPageContainer from "./GroupInfoPage/GroupInfoPage";

const GroupProfile = (props) => {
    const location = useLocation();
    const groupId = location.pathname.split("/")[2]
    const [error] = useState()

    const getAllInfo = () => {
        props.getGroupProfile(groupId)
    }

    useEffect(() => {
        getAllInfo()
    }, [groupId])

    if (!props.groupProfileInfo) return <Preloader/>
    if (error) return <div>Группы с данным именем не существует.</div>

    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <GroupAvatarCard groupDescription={props.groupProfileInfo.groupDescription} groupAvatar={props.groupProfileInfo.groupCroppedAvatarUrl} groupName={props.groupProfileInfo.groupName}/>
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
    connect(mapStateToProps, {getGroupProfile, updateGroupProfile, uploadGroupAvatar, updateGroupAvatar, deleteGroupAvatar}),
    withAuthRedirect
)(GroupProfile)

export default GroupProfileContainer;
