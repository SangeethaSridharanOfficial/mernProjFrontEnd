import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import './Nav.css';

function Navigation() {
    return (
        <>
            <Navbar className="drop-shadow" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end d-flex'>
                        <Nav>
                            <Nav.Link as={Link} to="/" className="nav-link pe-3">Products</Nav.Link>
                            <Nav.Link as={Link} to="/my-orders" className="nav-link pe-3" >My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/cart" className="nav-link pe-3" >My Cart</Nav.Link>
                            <Nav.Link>
                                <FontAwesomeIcon icon={faPowerOff} /> Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;