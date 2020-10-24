import React from 'react'
import {Link ,useHistory } from "react-router-dom";
import StoreService from '../store/Store'

export const Login = () =>{
    const store = React.useContext(StoreService)
    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        store.checkLogin("trongngo","123");
        if(store.isUser){
            history.replace({
                pathname: "/home",
            })
        }
    }
    return <> 
        
        <form onSubmit={handleSubmit}>
        <table className="form-login">
            <tr ><td className="form-login" rowSpan={2}><img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" height="100px" alt="3"/>
            </td><td className="form-login"><input className="login" placeholder="account" /></td></tr>
            <tr><td className="form-login"><input className="login" placeholder="password" /></td></tr>
        </table>
        <button type="submit" className="button-login" >Sign In</button>
        <Link to="/signup"><button className="button-login">Sign Up</button></Link>
        </form>
        
    </>
}