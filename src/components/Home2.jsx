import React, {useContext} from 'react';
import Comment from './Comment';
import CountComment  from './CountComment';
import Image from './Image';
import InputComment from './InputComment';
import StoreService from "../store/Store";
import {Redirect } from 'react-router-dom'
export const Home = ()=> {
    const  store = useContext(StoreService)
    return (
        store.userss[0].post.map((post,index) =>{
            let tempListUser = []
            post.comment.commentUser.map((commentUser) =>{
                tempListUser.push(commentUser);
            });
            return (
                <table key={index} className="table-comment">
                    <tbody>
                        <tr><td> <tr>
                            <td><img src={post.img} height="250px" alt={post.alt}/></td>
                        </tr></td></tr>   
                        <tr><td className="comment-count">{post.comment.commentUser.length} comments</td></tr>
                        {post.comment.commentCcontent.map((commentContent,index) =>{
                            return(
                                <tr key={index} className="tr">
                                    <tbody><p className="comment">{tempListUser[index]}:&nbsp;&nbsp;&nbsp;{commentContent}</p></tbody>
                                </tr>
                            )
                        })}
                    <tr><td className="input-comment"><InputComment /></td></tr>
                    </tbody>
                </table>
            )
        })
    );
}

// <React.Fragment>
//     {/* {!store.isUser ? <Redirect to="/login"/> : null} */}
//     <hi className="welcome-text">hello User,</hi>
 
//    </React.Fragment>
// <table className="table-comment">
//      <tbody>
//         <tr><td><Image /></td></tr>
//         <CountComment />
//         <Comment />
//        <tr><td className="input-comment"><InputComment /></td></tr>
//        {/* <tr><td><Form/></td></tr> */}
//      </tbody>
//    </table>