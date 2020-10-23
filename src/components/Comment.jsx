import React from "react";
import { StoreContext } from "../main";
import {useObserver} from "mobx-react";
import Image from './Image'
import InputComment from "./InputComment";

const Comment = () => {
  const store = React.useContext(StoreContext);
  let tempUsers = []
  store.users.map((users) => {
      tempUsers.push(users)
  })
  console.log(tempUsers);
   return useObserver(
     () =>
     (<table className="table-comment">
       <tbody>
          <tr><td><Image /></td></tr>
          <tr><td className="comment-count">{store.commentCount} comments</td></tr>
         {
           store.comments.map((comment,index) =>{
             return (
               <tr key={index} className="tr">
                  <td>{tempUsers[index]}:&nbsp;&nbsp;&nbsp;{comment}</td>
               </tr>)
           })
         }
         <tr><td><InputComment /></td></tr>
       </tbody>
     </table>)
   )
}

export default Comment
