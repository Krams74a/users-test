import React from "react";
import {Card, Button} from "react-bootstrap";

export const User = (props) => {
    const deletePostHandler = (id) => {
        props.deletePost(id)
    }

    return (
        <div>
            <Card style={{ width: '18rem', marginBottom: "15px"}}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                    <Button variant="primary" style={{ marginRight: '7px' }}>Изменить</Button>
                    <Button variant="danger" onClick={() => deletePostHandler(props.id)}>Удалить</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default User
