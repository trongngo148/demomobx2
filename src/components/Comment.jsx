import React , {useEffect} from "react";
import StoreService from "../store/Store"
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
        comments.map((comment,index) =>{
           return (
             <tr key={index} className="tr">
                <td>{tempUsers[index]}:&nbsp;&nbsp;&nbsp;{comment}</td>
             </tr>)
         })
   )
}

export default observer(Comment)
