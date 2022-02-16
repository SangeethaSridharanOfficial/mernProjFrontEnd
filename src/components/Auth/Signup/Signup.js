import { Button, Form } from "react-bootstrap";

const Signup = ({loginText, signupAction, isLogin, handleTransitionToLogin}) => {
    return (
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
                <p>Existing User? <a onClick={handleTransitionToLogin} aria-controls="login-card" aria-expanded={isLogin} className="pointer">{loginText}</a></p>
            </Form.Group>
            <Button variant="success" type="submit">
                {signupAction}
            </Button>
        </Form>
    )
}

export default Signup;