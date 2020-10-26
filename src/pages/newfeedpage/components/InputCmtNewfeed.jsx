import React from "react";
import StoreService from "../../../store/Store";


const InputCmtNewfeed = (props) => {
    const store = React.useContext(StoreService);
    const {updateCommentNewFeed} = store;
    const [comment, setComment] = React.useState("");
    const handleInput = (e) =>{
        console.log('====================================');
        console.log(props.indexPost);
        console.log('====================================');
        e.preventDefault();
        console.log('====================================');
        console.log(props.userId);
        console.log('====================================');

        comment.length === 0 ? alert("Sorry ! Please Typing something"): updateCommentNewFeed(comment,store.userName, props.indexPost,props.userId);
        setComment("");
    }
    return(
        <form  onSubmit={handleInput} className="" >
            &nbsp;<input type="text" value={comment} onChange={(e) =>{
                setComment(e.target.value)
            }} className="form-inputcmt" placeholder="Comment something.."/> &nbsp;
            <button type="submit" className="btn-inputcmt">Comment</button>
        </form>
    );
}

export default InputCmtNewfeed;