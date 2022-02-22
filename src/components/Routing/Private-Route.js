import { useState } from "react";
import { Navigate, Route } from "react-router-dom";

//TODO...
export const PrivateRoute = ({ component: Component, ...rest }) => {
    // const [loggedIn, _] = useState(true);
    // return (
    // <Route {...rest} render={props => (
    //     loggedIn ? (<Component {...props} />) : (
    //         <Navigate to={{
    //             pathname: '/auth',
    //             state: { from: props.location }
    //         }} />
    //     )
    // )} />)
}
