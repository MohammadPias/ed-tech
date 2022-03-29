import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
// import useAuth from '../../Context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoding } = useFirebase();
    const location = useLocation();
    if (isLoding) {
        return <Spinner animation="border" variant="warning" />
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;