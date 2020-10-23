import React , {useEffect, useState} from "react";
import Image from './Image'
import StoreService from "../store/Store"
import InputComment from "./InputComment";
import { observer } from "mobx-react-lite"

const Comment = () => {
  useEffect(()=> {
      console.log(commentCount);
      console.log("it run in comments");
  })
  const store = React.useContext(StoreService);
  let tempUsers = []
  const {comments, users, commentCount} = store
  
  users.map((users) => {
      tempUsers.push(users)
  })
  return(
    <React.Fragment>
      <table className="table-comment">
       <tbody>
          <tr><td><Image /></td></tr>
          <tr><td className="comment-count">{commentCount} comments</td></tr>
         {
          comments.map((comment,index) =>{
             return (
               <tr key={index} className="tr">
                  <td>{tempUsers[index]}:&nbsp;&nbsp;&nbsp;{comment}</td>
               </tr>)
           })
         }
         <tr><td><InputComment /></td></tr>
         {/* <tr><td><Form/></td></tr> */}
       </tbody>
     </table>
     </React.Fragment>
     )
}

export default observer(Comment)
