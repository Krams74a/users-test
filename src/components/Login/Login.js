import {Form, Button, Row, Col} from "react-bootstrap"
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {login, registration} from "../../reducers/auth-reducer";

const Login = (props) => {
    const [validated, setValidated] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === true) {
            props.login(username, password)
        }
        setValidated(true)
    }

    return (
        <div>
            <h1>Войти</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Имя пользователя"
                            defaultValue=""
                            onChange={usernameHandler}
                            value={username}
                        />
                        <Form.Control.Feedback type={"invalid"}>Неверное имя пользователя</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" required onChange={passwordHandler} value={password}/>
                        <Form.Control.Feedback type="invalid">
                            Неправильный пароль
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Button type="submit">Войти</Button>
                    <Row className="mb-3">
                        <Form.Text className="text-muted">
                            Нет аккаунта? <NavLink style={{textDecoration: "none"}} to={'/register'}>Зарегистрироваться</NavLink>
                        </Form.Text>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

    }
}

const LoginContainer = connect(mapStateToProps, {login})(Login)

export default LoginContainer
