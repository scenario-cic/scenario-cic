import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import LoaderButton from "../../components/LoaderButton";
import { useAppContext } from "../../lib/contextLib";
import { useFormFields } from "../../lib/hooksLib";
import { onError } from "../../lib/errorLib";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

// Login function 
export default function Login() {
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFormFields({ // Creates the field to takes the values
        email: "",
        password: ""
    });
    localStorage.setItem('email', fields.email);// To send it to the api call 
    // Validation part
    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }
    //On submit 
    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            await Auth.signIn(fields.email, fields.password);
            userHasAuthenticated(true);
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    return (
        <div className="login">
            <div className="forms-container">
                <div className="signin">
                    <Form className="sign-in-form" onSubmit={handleSubmit}>
                        <h2 className="title">Login</h2>
                        <Form.Group size="lg" controlId="email">
                            <span className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={fields.email}
                                onChange={handleFieldChange}
                                placeholder="Email"
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <span className="icon">
                                <FontAwesomeIcon icon={faKey} />
                            </span>
                            <Form.Control
                                type="password"
                                value={fields.password}
                                onChange={handleFieldChange}
                                placeholder="Password"
                            />
                        </Form.Group>
                        <LoaderButton
                            block
                            size="lg"
                            type="submit"
                            isLoading={isLoading}
                            disabled={!validateForm()}
                        >
                            Login
                        </LoaderButton>
                        <div className={"d-flex align-items-center"}>
                            Don’t have an account?{" "}
                            <Link to="signup" className={"ml-1"}>
                                Sign Up here
                            </Link>
                        </div>
                        <footer className="login-footer">{new Date().getFullYear()} Scenar.io</footer>
                    </Form>

                </div>
            </div >
        </div>
    );
}