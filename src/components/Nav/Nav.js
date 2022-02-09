import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Sports</Navbar.Brand>
                    <Nav className="me-auto">
                        <Navbar.Brand as={Link} to="/" className="nav-link">Products</Navbar.Brand>
                        <Navbar.Brand as={Link} to="/my-orders" className="nav-link" >My Orders</Navbar.Brand>
                        <Navbar.Brand as={Link} to="/cart" className="nav-link" >Your Cart</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;