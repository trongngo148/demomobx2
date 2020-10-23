import React from "react";
import StoreService from "../store/Store";


const InputComment = () => {
    const store = React.useContext(StoreService);
    const {updateComment} = store;
    const [comment, setComment] = React.useState("");
    const handleInput = (e) =>{
        e.preventDefault();
        comment.length === 0 ? alert("Sorry ! Please Typing something"): updateComment(comment);
        setComment("");
    }
    return(
        <form onSubmit={handleInput}>
            &nbsp;<input type="text" value={comment} onChange={(e) =>{
                setComment(e.target.value)
            }}/> &nbsp;
            <button type="submit">Comment</button>
        </form>
    );
}

export default InputComment;