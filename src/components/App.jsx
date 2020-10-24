import React,{ Fragment }  from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {routes} from "../routes"
export const App = () =>{
    const showContent = (routes) =>{
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index ) =>{
                return(
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return result
    }
    return <> 
    <BrowserRouter>
        <Fragment>
            <Switch>
                {showContent(routes)}
            </Switch>
        </Fragment>.
    </BrowserRouter>
    </>
}