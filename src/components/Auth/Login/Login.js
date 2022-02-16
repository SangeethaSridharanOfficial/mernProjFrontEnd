import { Button, Form } from "react-bootstrap"

const Login = ({signupText, loginAction, isLogin, handleTransitionToSignup}) => {
    return (
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
                <p>New User? <a onClick={handleTransitionToSignup} aria-controls="signup-card" aria-expanded={!isLogin} className="pointer">{signupText}</a></p>
            </Form.Group>
            <Button variant="success" type="submit">
                {loginAction}
            </Button>
        </Form>
    )
}
export default Login;