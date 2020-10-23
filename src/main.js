import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import Comment from "./components/Comment";
import storeInstance from "./store/Store";

export const StoreContext = React.createContext()
ReactDOM.render(<StoreContext.Provider value={storeInstance}>
                    
                </StoreContext.Provider>, document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}