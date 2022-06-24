import React from "react";
import {Card} from "react-bootstrap";

export const User = (props) => {
    return (
        <div>
            <Card style={{ width: '100%', marginTop: "5px", backgroundColor: "#fafafb"}}>
                <Card.Body>
                    <Card.Title>{props.firstName} {props.secondName}</Card.Title>
                    <Card.Text>{props.age}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default User
