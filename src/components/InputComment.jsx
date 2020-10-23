import React from "react";
import { StoreContext } from "../main";


const InputComment = () => {
    const store = React.useContext(StoreContext);
    const [comment, setComment] = React.useState("");
    const handleInput = (e) =>{
        e.preventDefault();
        store.updateComment(comment);
        setComment("");
        console.log("hii");
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