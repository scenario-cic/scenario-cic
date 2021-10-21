import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../../components/LoaderButton";
import { useAppContext } from "../../lib/contextLib";
import { useFormFields } from "../../lib/hooksLib";
import { onError } from "../../lib/errorLib";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";
import { Auth } from "aws-amplify";
import axios from 'axios'
import { POSTURL } from '../../constant/api'
// Signup function 
export default function Signup() {
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
        confirmationCode: "",
    });
    const history = useHistory();
    const [newUser, setNewUser] = useState(null);
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);

    localStorage.setItem('signupEmail', fields.email);
    // method to validate
    function validateForm() {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword &&
            fields.firstName.length > 0 &&
            fields.lastName.length > 0

        );
    }
    // method to validate conformationform
    function validateConfirmationForm() {
        return fields.confirmationCode.length > 0;
    }
    // on submit
    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            const newUser = await Auth.signUp({
                username: fields.email,
                password: fields.password,
            });
            setIsLoading(false);
            setNewUser(newUser);
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }
    // on submit in conformation form 
    async function handleConfirmationSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            await Auth.confirmSignUp(fields.email, fields.confirmationCode);
            await Auth.signIn(fields.email, fields.password);

            userHasAuthenticated(true);
            history.push("/course");
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }
    // conformation form 
    function renderConfirmationForm() {
        return (
            <div className={"signup-main"}>
                <div className="forms-container">
                    <div className="signup" >
                        <Form onSubmit={handleConfirmationSubmit}>
                            <Form.Group controlId="confirmationCode" size="lg">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <Form.Control
                                    autoFocus
                                    type="tel"
                                    onChange={handleFieldChange}
                                    value={fields.confirmationCode}
                                    placeholder="Conformation Code"
                                />

                            </Form.Group>
                            <p>Please check your email for the code.</p>
                            <LoaderButton
                                block
                                size="lg"
                                type="submit"
                                variant="success"
                                isLoading={isLoading}
                                disabled={!validateConfirmationForm()}
                            >
                                Verify
                            </LoaderButton>
                        </Form>
                    </div></div>
            </div>
        );
    }
    // API to create the recommandation 
    async function createRecomendation(event) {
        event.preventDefault();
        const body = {
            "userName": fields.email,
            "attacks": "Phishing"
        }
        const postHeaders = {
            'Content-Type': 'application/json',
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"

        }
        try {
            axios.post(POSTURL, body, { postHeaders })

                .then(res => {
                })
        } catch (e) {
            console.log(e)
        }
    }
    // Signup form 
    function renderForm() {
        return (
            <div className={"signup-main"}>
                <div className="forms-container">
                    <div className="signup" >
                        <Form onSubmit={handleSubmit} className="sign-in-form">
                            <h2 className="title">Sign up</h2>
                            <Form.Group controlId="firstName" size="lg">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <Form.Control
                                    type="text"
                                    onChange={handleFieldChange}
                                    value={fields.firstName}
                                    placeholder="First Name"
                                />
                            </Form.Group>
                            <Form.Group controlId="lastName" size="lg">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <Form.Control
                                    type="text"
                                    onChange={handleFieldChange}
                                    value={fields.lastName}
                                    placeholder="Last Name"
                                />
                            </Form.Group>
                            <Form.Group controlId="email" size="lg">
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
                            <Form.Group controlId="password" size="lg">
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
                            <Form.Group controlId="confirmPassword" size="lg">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <Form.Control
                                    type="password"
                                    onChange={handleFieldChange}
                                    value={fields.confirmPassword}
                                    placeholder="Confirm Password"
                                />
                            </Form.Group>
                            <p>Have you had any experience with the attack below ?(Tick if experienced )</p>

                            {/* checkbox for the attacks to craete recommandation */}
                            <div className="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="check"
                                        onChange={createRecomendation}
                                        disabled={!fields.email}
                                    />
                                    Phishing
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="check"
                                        onChange={createRecomendation}
                                        disabled={!fields.email}
                                    />
                                    Trojan
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="check"
                                        onChange={createRecomendation}
                                        disabled={!fields.email}
                                    />
                                    Ransomware
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="check"
                                        onChange={createRecomendation}
                                        disabled={!fields.email}
                                    />
                                    Spyware
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="check"
                                        onChange={createRecomendation}
                                        disabled={!fields.email}
                                    />
                                    XSS
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="check"
                                        onChange={createRecomendation}
                                        disabled={!fields.email}
                                    />
                                    Rootkit
                                </label>
                            </div>
                            <LoaderButton
                                block
                                size="lg"
                                type="submit"
                                variant="success"
                                isLoading={isLoading}
                                disabled={!validateForm()}
                            >
                                Signup
                            </LoaderButton>
                        </Form>
                    </div>
                </div >
            </div >
        );
    }
    return (
        <div className="Signup">
            {newUser === null ? renderForm() : renderConfirmationForm()}
        </div>
    );
}