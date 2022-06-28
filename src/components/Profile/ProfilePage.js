import React, {useEffect} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import AvatarCard from "./AvatarCard/AvatarCard";
import LinksCard from "./LinksCard/LinksCard";
import UserInfoCard from "./UserInfoCard/UserInfoCard";
import AdditionalInfoPage from "./AdditionalInfoPage/AdditionalInfoPage";
import {getProfile} from "../../reducers/profile-reducer";
import {NavLink, useParams} from "react-router-dom";
import {Navigate} from "react-router";

const ProfilePage = (props) => {
    let {id} = useParams()
    useEffect(() => {
        props.getProfile(id)
    }, [])
    if (!id) {
        id = props.loggedUserInfo.username
        return <Navigate replace to={"/profile/" + id}/>
    }
    if (!props.profileInfo) return <div>Пользователя с данным именем не существует. Вы можете создать свою <NavLink to={"/register"}>страницу.</NavLink></div>
    return (
        <div className="container">
            <h1>Профиль</h1>
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3" >
                        <AvatarCard username={props.profileInfo.username} status={props.profileInfo.status}
                                    address={props.profileInfo.address}/>
                        <LinksCard website={props.profileInfo.website} github={props.profileInfo.github}
                                   facebook={props.profileInfo.facebook} instagram={props.profileInfo.instagram}
                                   twitter={props.profileInfo.twitter}/>
                    </div>
                    <div className="col-md-8">
                        <UserInfoCard/>
                        {/*<AdditionalInfoPage/>*/}
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
        profileInfo: state.profile.profileInfo
    }
}

const ProfileContainer = compose(
    connect(mapStateToProps, {getProfile}),
    withAuthRedirect
)(ProfilePage)

export default ProfileContainer;
