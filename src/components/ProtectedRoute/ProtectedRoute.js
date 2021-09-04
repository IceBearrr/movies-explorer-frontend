import React from 'react';
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    //props.onTokenCheck();
console.log("props.loggedIn  " + props.loggedIn );
    return (
        <Route>
            {

                () => props.loggedIn ? <Component {...props} /> : <Redirect to="./signin"/>
            }
        </Route>
    )
}

export default ProtectedRoute;