import { Navigate } from 'react-router-dom';  // Use Navigate for redirecting
import Parse from 'parse';

const ProtectedRoute = ({ element }) => {
    // Check if the user is logged in
    const currentUser = Parse.User.current();

    if (!currentUser) {
        // If not logged in, redirect to the login page
        return <Navigate to="/login" />;
    }

    return element;  // If logged in, return the element (i.e., page)
};

export default ProtectedRoute;
