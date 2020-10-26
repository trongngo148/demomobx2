import React, {useContext} from 'react';
import CommentNewfeed from './CommentNewfeed';
import ImageNewfeed from './ImageNewfeed';
import InputCmtNewfeed from './InputCmtNewfeed';
import StoreService from "../../../store/Store";
import { observer } from "mobx-react-lite"
const BodyNewfeed = () => {
    const  store = useContext(StoreService)
    return <>
        {store.getAllUser.map((user) =>{
        const tempUserName = user.username;
        const tempUserId= user.id;
        return(
                user.post.slice(0).reverse().map((post) =>{
                    let tempListUser = []
                    post.comment.commentUser.map((commentUser) =>{
                        tempListUser.push(commentUser);
                    });
                    return (
                        <>    
                        <table key={post.id} className="table-comment">
                            <tbody>
                                <tr><td><p className="username-newfeed">{tempUserName} ,</p><ImageNewfeed key={post.id} src={post.img} alt={post.alt} /></td></tr>  
                                <hr></hr> 
                                <tr><td key={post.id} className="comment-count">{post.countLike}
                                <img className="img-comment-count" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Love_or_Heart_transparent.png" height="20px" width="20px" onClick={()=> {store.updateCountLikeNF(post.id,tempUserId)}}/>{post.comment.commentUser.length} comments</td></tr>
                                <hr></hr>
                                {post.comment.commentContent.map((commentContent,index) =>{
                                    return(
                                        <CommentNewfeed key={index} user={tempListUser[index]} comment={commentContent} />
                                    )
                                })}
                                <hr></hr> 
                            <tr><td key={post.id} className="input-comment"><InputCmtNewfeed key={post.id} indexPost={post.id} userId={tempUserId} /></td></tr>
                            </tbody>
                        </table>
                        <br />
                        </>
                    )
                })
        )
    })}
    </>
}
export default observer(BodyNewfeed)