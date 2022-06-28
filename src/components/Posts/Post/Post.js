import React, {useState} from "react";
import {Card, Button} from "react-bootstrap";
import {useNavigate} from "react-router";

export const Post = (props) => {
    const deletePostHandler = (id) => {
        props.deletePost(id)
    }

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const navigate = useNavigate();

    const navigateToUser = (username) => {
        navigate("/profile/" + username)
    }

    return (
        <div>
            <Card style={{width: '25rem', marginBottom: "10px", backgroundColor: "#f3f3f3"}}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <span style={{cursor: "pointer", textDecoration: isHovering ? 'underline' : ''}}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave} onClick={() => navigateToUser(props.author)}>
                            {props.author}
                        </span>
                    </Card.Subtitle>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post
