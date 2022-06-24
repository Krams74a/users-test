import './App.module.css';
import React from "react";
import UsersContainer from "./components/UsersPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.css"

const App = () => {
    return(
        <div className={styles.app}>
            <UsersContainer />
        </div>
    )
}

export default App;
