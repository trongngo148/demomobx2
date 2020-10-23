import React from 'react';
import Comment from './Comment';
import CountComment  from './CountComment';
import Image from './Image';
import InputComment from './InputComment';

export const UI = ()=> {
    return <React.Fragment>
    <table className="table-comment">
     <tbody>
        <tr><td><Image /></td></tr>
        <CountComment />
        <Comment />
       <tr><td><InputComment /></td></tr>
       {/* <tr><td><Form/></td></tr> */}
     </tbody>
   </table>
   </React.Fragment>
}