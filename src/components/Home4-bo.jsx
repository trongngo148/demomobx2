import React, {useContext} from 'react';
import Comment from './Comment';
import CountComment  from './CountComment';
import Image from './Image';
import InputComment from './InputComment';
import StoreService from "../store/Store"
import {Redirect } from 'react-router-dom'
export const Home = ()=> {
    const  store = useContext(StoreService)
    return <React.Fragment>
    {/* {!store.isUser ? <Redirect to="/login"/> : null} */}
    <hi className="welcome-text">hello User,</hi>
    <table className="table-comment">
     <tbody>
        <tr><td><Image /></td></tr>
        <CountComment />
        <Comment />
       <tr><td className="input-comment"><InputComment /></td></tr>
       {/* <tr><td><Form/></td></tr> */}
     </tbody>
   </table>
   </React.Fragment>
}