import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap"
import {useNavigate} from "react-router";

const FriendCard = (props) => {
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
        <Card style={{width: '25rem', marginBottom: "10px", backgroundColor: "#f3f3f3"}}>
            <Card.Body>
                <Card.Title><span style={{cursor: "pointer", textDecoration: isHovering ? 'underline' : ''}}
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave} onClick={() => navigateToUser(props.username)}>
                            {props.username}
                        </span></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {props.status}
                </Card.Subtitle>
                <Button variant={"danger"} onClick={() => props.deleteFriend(props.username, props.loggedUserInfoUsername)}>Отписаться</Button>
            </Card.Body>
        </Card>
    )
}

export default FriendCard;
