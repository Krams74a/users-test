import React from "react";
import BigAvatar from "../../../Avatar/User/BigAvatar/BigAvatar";
import {Button} from "react-bootstrap";
import GroupBigAvatar from "../../../Avatar/Group/GroupBigAvatar/GroupBigAvatar";

const GroupAvatarCard = ({groupAvatar, groupDescription, groupName}) => {
    return (
        <div className="card" style={{backgroundColor: "#f3f3f3"}}>
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <GroupBigAvatar avatarUrl={groupAvatar}/>
                    <div className="mt-3">
                        <Button>Подписаться</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupAvatarCard
