import { PropTypes } from "mobx-react";
import React from "react";
import StoreService from "../store/Store";


const InputComment = (props) => {
    const store = React.useContext(StoreService);
    const {updateComment} = store;
    const [comment, setComment] = React.useState("");
    const handleInput = (e) =>{
        console.log('====================================');
        console.log(props.indexPost);
        console.log('====================================');
        e.preventDefault();
        comment.length === 0 ? alert("Sorry ! Please Typing something"): updateComment(comment,store.userName, props.indexPost);
        setComment("");
    }
    return(
        <form  onSubmit={handleInput} className="" >
            &nbsp;<input type="text" value={comment} onChange={(e) =>{
                setComment(e.target.value)
            }} className="form-inputcmt" placeholder="Enter something.."/> &nbsp;
            <button type="submit" className="btn-inputcmt">Comment</button>
        </form>
    );
}

export default InputComment;