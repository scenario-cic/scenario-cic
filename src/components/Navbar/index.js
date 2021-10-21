import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Routes from "../../Routes";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "../../lib/contextLib";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { onError } from "../../lib/errorLib";
import logo from "../../images/logo.png"

//Navbar function 
function NavBar() {
    const history = useHistory(); // use history for the user login and logout 
    const [isAuthenticating, setIsAuthenticating] = useState(true); // to check the authentication true 
    const [isAuthenticated, userHasAuthenticated] = useState(false);// to check the authentication is false 
    useEffect(() => {
        onLoad();
    }, []);
    // Onloading check for authorization 
    async function onLoad() {
        try {
            await Auth.currentSession();
            userHasAuthenticated(true);
        }
        catch (e) {
            if (e !== 'No current user') {
                onError(e);
            }
        }

        setIsAuthenticating(false);
    }
    //Logout function
    async function handleLogout() {
        await Auth.signOut();

        userHasAuthenticated(false);
        history.push("/login");
    }
    //main UI part 
    return (
        !isAuthenticating && (
            <div className="App container py-3">
                <Navbar collapseOnSelect expand="md" className="mb-3">
                    <LinkContainer to="/">
                        <Navbar.Brand className="font-weight-bold text-muted">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Scenar.io
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav activeKey={window.location.pathname}>
                            {isAuthenticated ? (
                                <>
                                    <LinkContainer to="/course">
                                        <Nav.Link>Courses</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/curriculum">
                                        <Nav.Link>Curriculum</Nav.Link>
                                    </LinkContainer>
                                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <LinkContainer to="/quizHome">
                                        <Nav.Link>Signup</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/login">
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>

                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
                    <Routes />
                </AppContext.Provider>
            </div>
        )
    );
}

export default NavBar;