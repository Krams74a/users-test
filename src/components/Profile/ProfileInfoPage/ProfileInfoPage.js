import React from 'react';
import AdditionalInfoPage from "./AdditionalInfoPage/AdditionalInfoPage";
import {withPublicSettings} from "../../../hoc/withPublicSettings";
import {compose} from "redux";
import UserInfoCard from "./UserInfoCard/UserInfoCard";

const ProfileInfoPage = (props) => {
    return (
        <div>
            <UserInfoCard loggedUserInfoUsername={props.loggedUserInfoUsername} username={props.username}
                                   sex={props.sex} address={props.address}
                                   birthday={props.birthday} email={props.email}
                                   fullname={props.fullName}
                                   phoneNumber={props.phoneNumber}
                                   publicSettings={props.publicSettings} isFriend={props.checkIsFriend} profileFriends={props.profileFriends} profile={props.profileInfo}/>
            <AdditionalInfoPage profileFriends={props.profileFriends} profile={props.profileInfo} loggedUserInfoUsername={props.loggedUserInfoUsername} username={props.username} publicSettings={props.publicSettings}/>
        </div>
    );
};

const ProfileInfoPageContainer = compose(withPublicSettings)(ProfileInfoPage)

export default ProfileInfoPageContainer;
