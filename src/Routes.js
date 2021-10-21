import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFound from "./containers/notFound/NotFound";
import Login from "./containers/login/login";
import Signup from "./containers/signup/signup";
import Quiz from "./containers/Quiz/quiz"
import Course from "./containers/Course/course"
import Curriculum from "./containers/Curriculum/Curriculum"
import QuizHome from "./containers/Quiz/quizHome"
import UnauthenticatedRoute from "./components/Auth/UnauthenticatedRoute";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <UnauthenticatedRoute exact path="/login">
                <Login />
            </UnauthenticatedRoute>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/quiz">
                <Quiz />
            </Route>
            <Route exact path="/curriculum">
                <Curriculum />
            </Route>
            <Route exact path="/course">
                <Course />
            </Route>
            <Route exact path="/quizHome">
                <QuizHome />
            </Route>
            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>

        </Switch>
    );
}