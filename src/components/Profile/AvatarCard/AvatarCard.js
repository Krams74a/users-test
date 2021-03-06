import React, {useEffect, useState} from "react";
import AvatarPlaceholder from "../../../assets/avatar-placeholder.png"

const AvatarCard = ({avatar, username, status, address, loggedUserInfoUsername, addFriend, deleteFriend, friendsList}) => {
    const [isFriend, setIsFriend] = useState(false)
    useEffect(() => {
        friendsList.forEach(friend => {
            if (friend.username === username) {
                setIsFriend(true)
            } else {
                setIsFriend(false)
            }
        })
    }, [username])

    const addFriendHandler = (friendId, userId) => {
        addFriend(friendId, userId)
        setIsFriend(true)
    }

    const deleteFriendHandler = (friendId, userId) => {
        deleteFriend(friendId, userId)
        setIsFriend(false)
    }

    return (
        <div className="card" style={{backgroundColor: "#f3f3f3"}}>
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    {
                        avatar
                            ? <img style={{height: "150px", width: "150px"}}
                                   src={`https://dry-meadow-99203.herokuapp.com/${avatar}`}
                                   onError={({currentTarget}) => {
                                       currentTarget.onerror = null; // prevents looping
                                       currentTarget.src = AvatarPlaceholder;
                                   }}
                                   className="rounded-circle" width="150" alt={"User"}/>
                            : <img style={{height: "150px", width: "150px"}} src={AvatarPlaceholder}
                                   onError={({currentTarget}) => {
                                       currentTarget.onerror = null; // prevents looping
                                       currentTarget.src = AvatarPlaceholder;
                                   }}
                                   className="rounded-circle" width="150" alt={"User"}/>
                    }

                    <div className="mt-3">
                        <h4>{username}</h4>
                        <p className="text-secondary mb-1">{status || "??????????????????????"}</p>
                        <p className="text-muted font-size-sm">{address || "??????????????????????"}</p>
                        {!(loggedUserInfoUsername === username)
                            ? !isFriend ? <button className="btn btn-primary" style={{marginRight: "10px"}}
                                                  onClick={() => addFriendHandler(username, loggedUserInfoUsername)}>??????????????????????</button> :
                                <button className="btn btn-danger" style={{marginRight: "10px"}}
                                        onClick={() => deleteFriendHandler(username, loggedUserInfoUsername)}>????????????????????</button>
                            : null
                        }
                        {!(loggedUserInfoUsername === username) ?
                            <button className="btn btn-outline-primary">??????????????????</button> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarCard
