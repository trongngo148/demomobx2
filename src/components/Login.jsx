import React from 'react'
import {Link ,useHistory } from "react-router-dom";
import StoreService from '../store/Store'

export const Login = () =>{
    const store = React.useContext(StoreService)
    const history = useHistory();
    const [username, setUsername] = React.useState("");
    const [password, setPasswd] = React.useState("");
    const [error, setError] = React.useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        checkLogin();
    }
    const checkLogin = ()=>{
        store.checkLogin(username,password)
        if(username.length === 0 || password.length === 0 ){
            setError("Username or password is empty");
        }else if(!store.isUser){
            setError("Username or password is wrong")
        } else{
            setError("");
            history.replace({
                pathname: "/",
            })
        }
    }
    return <> 
        <form onSubmit={handleSubmit}>
        <table className="form-login">
            <tr ><td className="form-login" rowSpan={2}><img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" height="100px" alt="3"/>
            </td><td className="form-login">
            <input className="login" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} /></td></tr>
            <tr><td className="form-login">
            <input type="password" className="login" placeholder="password" value={password} onChange={(e) => {setPasswd(e.target.value)}}/></td></tr>
        </table>
        <button type="submit" className="button-login" >Sign In</button>
        <Link to="/signup"><button className="button-login">Sign Up</button></Link>
        </form>
        {error.length !== 0 ? <p className="error-text">{error}</p> : null}
    </>
}
