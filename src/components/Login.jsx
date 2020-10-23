import React from 'react'

import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
export const Login = () =>{
    return <> 
        <table className="form-login">
            <tr ><td className="form-login" rowSpan={2}><img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" height="100px" alt="3"/>
            </td><td className="form-login"><input className="login" placeholder="account" /></td></tr>
            <tr><td className="form-login"><input className="login" placeholder="password" /></td></tr>
        </table>
        <Link to="/signup"><button className="button-login">Sign In</button></Link><Link to="/login"><button className="button-login">Sign Up</button></Link>
    </>
}