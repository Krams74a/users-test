import {Form, Button} from "react-bootstrap"
import {useState} from "react";

const AddUsers = (props) => {
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [age, setAge] = useState("")

    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
    }

    const secondNameHandler = (event) => {
        setSecondName(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const onSubmit = (event, firstName, secondName, age) => {
        event.preventDefault()
        props.addUser(firstName, secondName, age)
    }

    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="firstName" placeholder="Имя" onChange={firstNameHandler}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSecondName">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="secondName" placeholder="Фамилия" onChange={secondNameHandler}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Возраст</Form.Label>
                    <Form.Control type="age" placeholder="Возраст" onChange={ageHandler}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(event) => onSubmit(event, firstName, secondName, age)}>
                    Добавить
                </Button>
            </Form>
        </div>
    )
}

export default AddUsers;
