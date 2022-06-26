import './App.module.css';
import React from "react";
import PostsContainer from "./components/PostsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import LoginContainer from "./components/Login/Login";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/posts' element={<PostsContainer/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/login' element={<LoginContainer />}/>
                    </Routes>
                    <Routes>
                        <Route path='/register' element={<Register/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
