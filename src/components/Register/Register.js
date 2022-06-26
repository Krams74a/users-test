import {Form, Button, Row, Col} from "react-bootstrap"
import {useState} from "react";

const Register = (props) => {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        setValidated(true)
    }
    return (
        <div>
            <h1>Регистрация</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Имя пользователя"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type={"invalid"}>Неверное имя пользователя</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" required />
                        <Form.Control.Feedback type="invalid">
                            Неправильный пароль
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Войти</Button>
            </Form>
        </div>
    );
}

export default Register
