import React from 'react'
import StoreService from '../store/Store'
import {observer} from 'mobx-react-lite'

const CountComment = () =>{
    const store = React.useContext(StoreService)
    const {commentCount} = store
    return  <tr><td className="comment-count">{commentCount} comments</td></tr>
}


export default observer(CountComment)