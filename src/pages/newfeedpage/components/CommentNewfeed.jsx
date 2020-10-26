import React  from "react";
import { observer } from "mobx-react-lite"

const CommentNewfeed = (props) => {
    return(
        <tr className="tr">
        <td><p className="comment">{props.user}:&nbsp;&nbsp;&nbsp;{props.comment}</p></td>
        </tr>
    );
}

export default observer(CommentNewfeed)
