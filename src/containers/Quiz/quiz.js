import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';
import './quiz.css';
import { LinkContainer } from "react-router-bootstrap";
export default class Quiz extends Component {
    // The data below is mapped to the answers and questions 
    // initiating the local state
    state = {
        quiestions: {
            1: 'Which of the following is the most commonly used (and therefore the weakest) password?',
            2: 'Ideally, what characters should you use in a password to make it strong?',
            3: 'How long should a strong password be?',
            4: 'Remember me functions in Web browsers or other applications are unsafe and should be avoided. True or False?'
        },
        answers: {
            1: {
                1: '123456',
                2: 'Asdf',
                3: 'Australia',
                4: 'Lion'
            },
            2: {
                1: 'Letters and Numbers only',
                2: 'Mixed Case (Upper and Lower) Characters',
                3: 'Special Characters',
                4: 'All of the above'
            },
            3: {
                1: '8 Characters',
                2: '15 Characters',
                3: 'As long as possible',
                4: 'It doesn’t matter'
            },
            4: {
                1: 'True',
                2: 'False',
            }
        },
        correctAnswers: {
            1: '1',
            2: '4',
            3: '3',
            4: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer,

            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }


    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render() {
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return (
            <div className={"quiz"}>
                <div className="quiz-container">
                    <div className="quiz-main">
                        <form className="quiz-form">
                            <div className="Content">
                                {step <= Object.keys(quiestions).length ?
                                    (<>
                                        <Question
                                            question={quiestions[step]}
                                        />
                                        <Answer
                                            answer={answers[step]}
                                            step={step}
                                            checkAnswer={this.checkAnswer}
                                            correctAnswer={correctAnswer}
                                            clickedAnswer={clickedAnswer}
                                        />
                                        <button
                                            className="NextStep"
                                            disabled={
                                                clickedAnswer && Object.keys(quiestions).length >= step
                                                    ? false : true
                                            }
                                            onClick={() => this.nextStep(step)}>Next</button>
                                    </>) : (
                                        <div className="finalPage">
                                            <h1>You have completed the quiz!</h1>
                                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                                            <p>Click to sign up </p>
                                            <div className="NextStep">
                                                <LinkContainer to="/signup">
                                                    <p>SignUp</p>
                                                </LinkContainer>
                                            </div>

                                        </div>
                                    )
                                }
                            </div>
                        </form>

                    </div>

                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content-quiz">
                            <h3>Quiz</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}