import React from 'react';
import {compose} from "redux";
import GroupInfoCard from "./GroupInfoCard/GroupInfoCard";
import GroupAdditionalInfoPage from "./GroupAdditionalInfoPage/GroupAdditionalInfoPage";

const GroupInfoPage = ({groupDescription, groupName, groupAuthor, loggedUserInfoUsername, groupMembers}) => {
    return (
        <div>
            <GroupInfoCard groupDescription={groupDescription} groupName={groupName} groupAuthor={groupAuthor} loggedUserInfoUsername={loggedUserInfoUsername}/>
            <GroupAdditionalInfoPage groupMembers={groupMembers}/>
        </div>
    );
};

const GroupProfileInfoPageContainer = compose()(GroupInfoPage)

export default GroupProfileInfoPageContainer;
