import React, {Component} from "react";
import {addNewPost, addPost, deletePost, deletePostAction, getPosts} from "../reducers/posts-reducer";
import {connect} from "react-redux";
import User from "./User";
import AddPost from "./AddPost";

export class PostsPage extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        if (!this.props.usersInfo) return <div>Loading...</div>
        return (
            <div>
                <AddPost addPost={this.props.addPost} addNewPost={this.props.addNewPost}/>
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

const PostsContainer = connect(mapStateToProps, {getPosts, addPost, deletePost, addNewPost, deletePostAction})(PostsPage);

export default PostsContainer;
