import {Navbar, Container, Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" style={{marginBottom: "15px"}}>
            <Container>
                <Navbar.Brand as={NavLink} to="/">Social Network</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Главная</Nav.Link>
                    <Nav.Link as={NavLink} to="/posts">Посты</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">Логин</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
