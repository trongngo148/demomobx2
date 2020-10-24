import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import {App} from "./components/App"

ReactDOM.render(
    // <UI />
    <App />
    , document.getElementById('root'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}