import './App.module.css';
import React from "react";
import PostsContainer from "./components/PostsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.css"
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import LoginContainer from "./components/Login/Login";
import RegisterContainer from "./components/Register/Register";
import {connect} from "react-redux";
import {initializeApp} from "./reducers/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import HeaderContainer from "./components/Header/Header";
import UsersContainer from "./components/Users/UsersPage";
import ProfileContainer from "./components/Profile/ProfilePage";

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
                        <Route path='profile' element={<ProfileContainer/>}/>
                        <Route path='' element={<ProfileContainer/>}/>
                        <Route path='posts' element={<PostsContainer/>}/>
                        <Route path='login' element={<LoginContainer/>}/>
                        <Route path='register' element={<RegisterContainer/>}/>
                        <Route path='users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </HashRouter>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = connect(mapStateToProps, {initializeApp})(App)

export default AppContainer;
