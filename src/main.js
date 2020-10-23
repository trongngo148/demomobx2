import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import Comment from "./components/Comment"


ReactDOM.render(
    <Comment />
    , document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}