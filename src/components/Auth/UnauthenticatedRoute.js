import React, { cloneElement } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../../lib/contextLib";
//function to check the url and if the direct access it will throw the authorized error function 
function querystring(name, url = window.location.href) {
    const parsedName = name.replace(/[[]]/g, "\\$&");
    const regex = new RegExp(`[?&]${parsedName}(=([^&#]*)|&|#|$)`, "i");
    const results = regex.exec(url);

    if (!results || !results[2]) {
        return false;
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//function for the redirection on unauthorization and authorize to redirect to main page
export default function UnauthenticatedRoute(props) {
    const { children, ...rest } = props;
    const { isAuthenticated } = useAppContext();
    const redirect = querystring("redirect");

    return (
        <Route {...rest}>
            {!isAuthenticated ? (
                cloneElement(children, props)
            ) : (
                <Redirect to={redirect ? redirect : "/course"} />
            )}
        </Route>
    );
}