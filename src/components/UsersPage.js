import React, {Component} from "react";
import {addUser, getUsers} from "../reducers/users-reducer";
import {connect} from "react-redux";
import User from "./User";
import AddUsers from "./AddUsers";

export class UsersPage extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        if (!this.props.usersInfo) return <div>Loading...</div>
        return (
            <div>
                <AddUsers addUser={this.props.addUser}/>
                {this.props.usersInfo.map(u => <User firstName={u.firstName} secondName={u.secondName} age={u.age}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersInfo: state.users.usersInfo
    }
}

const UsersContainer = connect(mapStateToProps, {getUsers, addUser})(UsersPage);

export default UsersContainer;
