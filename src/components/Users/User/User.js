import React from "react";
import {Card} from "react-bootstrap";

export const User = (props) => {
    return (
        <div>
            <Card style={{ width: '25rem', marginBottom: "10px"}}>
                <Card.Body>
                    <Card.Title>{props.username}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default User
