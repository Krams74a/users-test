import {Navbar, Container, Nav, Button} from "react-bootstrap"
import {NavLink, useNavigate} from "react-router-dom"
import {connect} from "react-redux";
import {logout} from "../../reducers/auth-reducer";

const Header = (props) => {
    const navigate = useNavigate()
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{marginBottom: "15px"}}>
            <Container>
                <Navbar.Brand as={NavLink} to={`/profile/${props.loggedUserInfo.username}`}>Social Network</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Button onClick={() => navigate(`/profile/${props.loggedUserInfo.username}`)} className='nav-link'>Профиль</Button>
                        <Button onClick={() => navigate('/posts')} className='nav-link'>Новости</Button>
                        <Button onClick={() => navigate('/users')} className='nav-link'>Пользователи</Button>
                        <Button onClick={() => navigate(`/friends/${props.loggedUserInfo.username}`)} className='nav-link'>Мои подписки</Button>
                    </Nav>
                    <Nav>
                        {props.isAuth ? <Button variant={"primary"} onClick={props.logout}>Выйти</Button> : <Button onClick={() => navigate('/login')}>Логин</Button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        loggedUserInfo: state.auth.loggedUserInfo
    }
}

const HeaderContainer = connect(mapStateToProps, {logout})(Header)

export default HeaderContainer
