import { useState } from 'react';
import { Button, Card, Col, Fade, Form, Row } from 'react-bootstrap';

import './Auth.css';

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='bg-photo min-vh-90'>
            <Row className="pt-5 pe-5">
                <Col xs={1} sm={7}></Col>
                <Col xs={11} sm={5}>
                    <Card className={isLogin ? '' : 'display-none'}>
                        <Fade in={isLogin}>
                            <div id="login-card">
                                <Card.Header>
                                    <h3>Login</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="helpText">
                                            <p>New User? <a onClick={() => setIsLogin(!isLogin)} aria-controls="signup-card" aria-expanded={!isLogin} className="pointer">Sign Up</a></p>
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                            Log In
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </div>
                        </Fade>
                    </Card>    
                    <Card className={isLogin ? 'display-none' : ''}>
                        <Fade in={!isLogin}>
                            <div id="signup-card">
                                <Card.Header>
                                    <h3>Sign Up</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="fullName">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter full name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="helpText">
                                            <p>Existing User? <a onClick={() => setIsLogin(!isLogin)} aria-controls="login-card" aria-expanded={isLogin} className="pointer">Log In</a></p>
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                            Sign Up
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </div>
                        </Fade>   
                    </Card>         
                </Col>
            </Row>
        </div>
    )
}

export default Auth;