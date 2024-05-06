import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component,auth,profile, ...rest }) => (
  
    <Route {...rest} render={(props) => (
        
        auth === true && profile === false ?   <Redirect to='/create-profile' /> : auth === true && profile === true ? <Component {...props} /> : <Redirect to='/login' />
    )} />

    
)

export default GuardedRoute;