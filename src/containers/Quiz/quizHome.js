import React, { Component } from 'react';
import './quiz.css';
import { Link } from "react-router-dom";
export default class QuizHome extends Component {
    //Main quiz page before the start of the quiz 
    render() {
        return (
            <div className={"quizHome"}>
                <div className="panels-container-home">
                    <div className="panel left-panel">
                        <div className="content">
                            <h1>
                                Did you want to complete a quick quiz to refresh your password safety knowledge?<br />
                            </h1>
                            <Link to={`/quiz`}>
                                <button
                                    className="btn transparent"
                                    id="sign-up-btn"
                                >
                                    Yes
                                </button></Link>
                            <Link to={`/signup`}><button
                                className="btn transparent"
                                id="sign-up-btn"
                            >
                                No
                            </button></Link>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}