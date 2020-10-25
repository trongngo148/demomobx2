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
        store.getUser.post.slice(0).reverse().map((post) =>{
            let tempListUser = []
            post.comment.commentUser.map((commentUser) =>{
                tempListUser.push(commentUser);
            });
            return (
                <>    
                <table key={post.id} className="table-comment">
                    <tbody>
                        <tr><td><Image key={post.id} src={post.img} alt={post.alt} /></td></tr>  
                        <hr></hr> 
                        <tr><td key={post.id} className="comment-count">{post.countLike}
                        <img className="img-comment-count" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Love_or_Heart_transparent.png" height="20px" width="20px" onClick={()=> {store.updateCountLike(post.id)}}/>{post.comment.commentUser.length} comments</td></tr>
                        <hr></hr>
                        {post.comment.commentContent.map((commentContent,index) =>{
                            return(
                                <Comment key={index} user={tempListUser[index]} comment={commentContent} />
                            )
                        })}
                        <hr></hr> 
                    <tr><td key={post.id} className="input-comment"><InputComment key={post.id} indexPost={post.id} /></td></tr>
                    </tbody>
                </table>
                <br />
                </>
            )
        })
    );
}
export default observer(BodyHome)