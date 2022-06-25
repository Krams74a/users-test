import React, {Component} from "react";
import {addNewPost, addPost, deletePost, deletePostAction, getPosts} from "../reducers/users-reducer";
import {connect} from "react-redux";
import User from "./User";
import AddUsers from "./AddUsers";

export class UsersPage extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        if (!this.props.usersInfo) return <div>Loading...</div>
        return (
            <div>
                <AddUsers addPost={this.props.addPost} addNewPost={this.props.addNewPost}/>
                {this.props.usersInfo.reverse().map(u => <User id={u._id} key={u._id} author={u.author} title={u.title}
                                                               content={u.content} picture={u.picture}
                                                               deletePost={this.props.deletePost}
                                                               deletePostAction={this.props.deletePostAction}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersInfo: state.users.usersInfo
    }
}

const UsersContainer = connect(mapStateToProps, {getPosts, addPost, deletePost, addNewPost, deletePostAction})(UsersPage);

export default UsersContainer;
