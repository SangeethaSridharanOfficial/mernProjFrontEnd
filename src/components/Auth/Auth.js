import { useState } from 'react';
import { Card, Col, Fade, Row } from 'react-bootstrap';

import './Auth.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);
    const loginText = "Log In";
    const signupText = "Sign Up";
    const loginAction = "Login";
    const signupAction = "Signup";

    const handleTransition = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className='bg-photo min-vh-90'>
            <Row className="pt-5 pe-5">
                <Col xs={1} sm={7}></Col>
                <Col xs={11} sm={5}>
                    <Card className={isLogin ? '' : 'display-none'}>
                        <Fade in={isLogin}>
                            <div id="login-card">
                                <Card.Header>
                                    <h3>{loginText}</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Login signupText={signupText} loginAction={loginAction} isLogin={isLogin} handleTransitionToSignup={handleTransition} />
                                </Card.Body>
                            </div>
                        </Fade>
                    </Card>    
                    <Card className={isLogin ? 'display-none' : ''}>
                        <Fade in={!isLogin}>
                            <div id="signup-card">
                                <Card.Header>
                                    <h3>{signupText}</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Signup loginText={loginText} signupAction={signupAction} isLogin={isLogin} handleTransitionToLogin={handleTransition} />
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