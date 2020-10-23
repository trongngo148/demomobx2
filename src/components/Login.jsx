import React from 'react'

import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
export const Login = () =>{
    return <> 
    <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <table className="form-login">
            <tr ><td className="form-login" rowSpan={2}><img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" height="100px" alt="3"/>
            </td><td className="form-login"><input className="login" placeholder="account" /></td></tr>
            <tr><td className="form-login"><input className="login" placeholder="password" /></td></tr>
        </table>
        <button className="button-login">Sign In</button><button className="button-login">Sign Up</button>
    </>
}