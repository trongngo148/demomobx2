import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import Comment from "./components/Comment"
import {UI} from "./components/UI";


ReactDOM.render(
    <UI />
    , document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}