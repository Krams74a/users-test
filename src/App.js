import './App.module.css';
import React from "react";
import PostsContainer from "./components/Posts/PostsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.css"
import {HashRouter, Route, Routes} from "react-router-dom";
import LoginContainer from "./components/Login/Login";
import RegisterContainer from "./components/Register/Register";
import {connect} from "react-redux";
import {initializeApp} from "./reducers/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import HeaderContainer from "./components/Header/Header";
import UsersContainer from "./components/Users/UsersPage";
import ProfileContainer from "./components/Profile/ProfilePage";
import {Navigate} from "react-router";
import SettingsPageContainer from "./components/Settings/SettingsPage";
import MessagesPageContainer from "./components/Messages/Messages";
import FriendsPageContainer from "./components/Friends/FriendsPage";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <HashRouter>
                <HeaderContainer/>
                <div className={styles.content}>
                    <Routes>
                        <Route path='' element={<Navigate replace to={`/profile/${this.props.loggedUserInfo.username}`}/>}/>
                        <Route path='profile/:id' element={<ProfileContainer/>}/>
                        <Route path='profile' element={<Navigate replace to={`/profile/${this.props.loggedUserInfo.username}`}/>}/>
                        <Route path='posts' element={<PostsContainer/>}/>
                        <Route path='login' element={<LoginContainer/>}/>
                        <Route path='register' element={<RegisterContainer/>}/>
                        <Route path='users' element={<UsersContainer/>}/>
                        <Route path='settings' element={<SettingsPageContainer/>}/>
                        <Route path='messages' element={<MessagesPageContainer/>}/>
                        <Route path='friends/:id' element={<FriendsPageContainer/>}/>
                    </Routes>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        loggedUserInfo: state.auth.loggedUserInfo
    }
}

const AppContainer = connect(mapStateToProps, {initializeApp})(App)

export default AppContainer;
