import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../../lib/contextLib";
// Function for the route redirection on authenticatio
export default function AuthenticatedRoute({ children, ...rest }) {
    const { pathname, search } = useLocation();
    const { isAuthenticated } = useAppContext();
    return (
        <Route {...rest}>
            {isAuthenticated ? (
                children
            ) : (
                <Redirect to={
                    `/login?redirect=${pathname}${search}`
                } />
            )}
        </Route>
    );
}