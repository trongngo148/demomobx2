import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import storeInstance from './store/Store'
import Comment from "./components/Comment"

export const StoreContext = React.createContext();

ReactDOM.render(
        <StoreContext.Provider value={storeInstance}>
            <Comment />
        </StoreContext.Provider >
    , document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}