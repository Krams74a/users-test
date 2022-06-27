import {Navbar, Container, Nav, Button, NavDropdown} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux";
import {logout} from "../../reducers/auth-reducer";

const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{marginBottom: "15px"}}>
            <Container>
                <Navbar.Brand as={NavLink} to="/profile">Social Network</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/profile">Профиль</Nav.Link>
                        <Nav.Link as={NavLink} to="/posts">Посты</Nav.Link>
                        <Nav.Link as={NavLink} to="/users">Пользователи</Nav.Link>
                    </Nav>
                    <Nav>
                        {props.isAuth ? <Button variant={"primary"} onClick={props.logout}>Выйти</Button> : <Nav.Link as={NavLink} to="/login">Логин</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const HeaderContainer = connect(mapStateToProps, {logout})(Header)

export default HeaderContainer
