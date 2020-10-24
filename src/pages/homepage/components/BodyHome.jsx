import React, {useContext} from 'react';
import Comment from './Comment';
import Image from './Image';
import InputComment from './InputComment';
import StoreService from "../../../store/Store";
import {Redirect } from 'react-router-dom'
import { observer } from "mobx-react-lite"
const BodyHome = () => {
    const  store = useContext(StoreService)
    
    return (
        store.userss[store.indexUsersCurrent].post.map((post,index) =>{
            let tempListUser = []
            post.comment.commentUser.map((commentUser) =>{
                tempListUser.push(commentUser);
            });
            return (
                <>    
                <table key={index} className="table-comment">
                    <tbody>
                        <tr><td> <Image key={index} src={post.img} alt={post.alt} /></td></tr>  
                        <hr></hr> 
                        <tr><td key={index} className="comment-count">{post.comment.commentUser.length} comments</td></tr>
                        <hr></hr>
                        {post.comment.commentContent.map((commentContent,index) =>{
                            return(
                                <Comment key={index} user={tempListUser[index]} comment={commentContent} />
                            )
                        })}
                        <hr></hr> 
                    <tr><td className="input-comment"><InputComment key={index} indexPost={index} /></td></tr>
                    </tbody>
                </table>
                <br />
                </>
            )
        })
    );
}
export default observer(BodyHome)