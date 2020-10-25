import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import StoreService from '../../store/Store'
export const SignUp = () =>{
    const store = React.useContext(StoreService)
    const history = useHistory();
    const [username, setUsername] = React.useState("");
    const [password, setPasswd] = React.useState("");
    const [repassword, setRepasswd] = React.useState("");
    const [error, setError] = React.useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        checkLogin();
    }
    const checkLogin = ()=>{
        store.checkUserName(username);
        if(username.length === 0 || password.length === 0 || repassword.length === 0 ){
            setError("Some fields is empty");
        }else if(password !== repassword ){
            setError("Password and repassword is dissimilarity");
        }else if(store.isUserExist){
            setError("Username is not available")
        } else{
            store.addUser(username,password);
            setError("");
            history.replace({
                pathname: "/",
            })
        }
    }
    return <> 
        <form  onSubmit={handleSubmit}>
        <table className="form-login">
            <tr><td className="form-login" rowSpan={3}><img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" height="100px" alt="3"/>
            </td><td className="form-login"><input value={username} onChange={(e) =>{setUsername(e.target.value)}} className="login" placeholder="username" /></td></tr>
            <tr><td className="form-login"><input type="password" value={password} onChange={(e) =>{setPasswd(e.target.value)}}  className="login" placeholder="password" /></td></tr>
            <tr><td className="form-login"><input type="password" value={repassword} onChange={(e) =>{setRepasswd(e.target.value)}}  className="login" placeholder="re-password" /></td></tr>
        </table>
        <Link to="/login" ><button className="button-login">Sign In</button></Link>
        <button className="button-login" type="submit">Sign Up</button>
        </form>
        
        {error.length !== 0 ? <p className="error-text">{error}</p> : null}
    </>
}