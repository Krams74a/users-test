import React from "react";
import {Card, Button} from "react-bootstrap";

export const Post = (props) => {
    const deletePostHandler = (id) => {
        props.deletePost(id)
    }

    return (
        <div>
            <Card style={{ width: '25rem', marginBottom: "10px"}}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.author}</Card.Subtitle>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post
