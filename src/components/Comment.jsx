import React , {useEffect} from "react";
import StoreService from "../store/Store"
import { observer } from "mobx-react-lite"

const Comment = (props) => {
//   useEffect(()=> {
//       console.log(commentCount);
//       console.log("it run in comments");
//   })
//   const store = React.useContext(StoreService);
//   let tempUsers = []
//   const {comments, userComments, commentCount} = store
  
//   userComments.map((users) => {
//       tempUsers.push(users)
//   })
//   return(
//         comments.map((comment,index) =>{
//            return (
//              <tr key={index} className="tr">
//                 <tbody><p className="comment">{tempUsers[index]}:&nbsp;&nbsp;&nbsp;{comment}</p></tbody>
//              </tr>)
//          })
//    )
    return(
        <tr className="tr">
        <td><p className="comment">{props.user}:&nbsp;&nbsp;&nbsp;{props.comment}</p></td>
        </tr>
    );
}

export default observer(Comment)
