import React, {Component} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";

export class ProfilePage extends Component {
    render() {
        return (
            <div>
                <h1>Профиль</h1>
                <p>
                    Пока тут пусто...
                </p>
                <div>
                    <img src={"https://flyclipart.com/thumbs/sad-emoticon-new-iphone-emojis-1019289.png"} style={{width: "200px", height: "200px"}}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const ProfileContainer = compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(ProfilePage)

export default ProfileContainer;
