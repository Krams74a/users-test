import React, {useEffect} from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {deleteFriend, getFriends} from "../../reducers/friends-reducer";
import {useLocation} from "react-router";
import FriendCard from "./FriendCard/FriendCard";

const FriendsPage = (props) => {
    const location = useLocation();
    const userId = location.pathname.split("/")[2]
    useEffect(() => {
        props.getFriends(userId)
    }, [])
    if (!props.friendsList) return <div>Loading...</div>
    if (props.friendsList.length === 0) return <div>У вас пока нет подписок...</div>
    return (
        <div>
            <h1>Мои подписки</h1>
            {props.friendsList.map((friend, id) => <FriendCard key={id} username={friend.username} status={friend.status} loggedUserInfoUsername={props.loggedUserInfoUsername} deleteFriend={props.deleteFriend}/>)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        friendsList: state.friends.friendsList,
        loggedUserInfoUsername: state.auth.loggedUserInfo.username
    }
}

const FriendsPageContainer = compose(
    connect(mapStateToProps, {getFriends, deleteFriend}),
    withAuthRedirect
)(FriendsPage)

export default FriendsPageContainer;
