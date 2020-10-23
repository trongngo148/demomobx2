import React from 'react'
export const SignUp = () =>{
    return <> 
        <table className="form-login">
            <tr><td className="form-login" rowSpan={3}><img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" height="100px" alt="3"/>
            </td><td className="form-login"><input className="login" placeholder="account" /></td></tr>
            <tr><td className="form-login"><input className="login" placeholder="password" /></td></tr>
            <tr><td className="form-login"><input className="login" placeholder="re-password" /></td></tr>
        </table>
        <button className="button-login">Sign In</button><button className="button-login">Sign Up</button>
    </>
}