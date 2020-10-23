import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import Comment from "./components/Comment"
import {UI} from "./components/UI";
import {Login} from "./components/Login"
import {SignUp} from "./components/SignUp"
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
    // <UI />
    <BrowserRouter>
        <Fragment>
        
            <Switch>
                <Route path="/login" component={Login} ></Route>
                <Route path="/signup" component={SignUp} />
                <Route path="/" exact component={Login} /> 
            </Switch>
        </Fragment>.
    </BrowserRouter>
    , document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}