import React from 'react'
import ReactDOM from 'react-dom'

const Image = (props) => {
    return (
  <div className="img-post"><img height="400px" width="350px"  src={props.src}  alt={props.alt}/></div>
      );
}

export default Image;