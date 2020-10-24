import React from 'react'

const Image = (props) => {
    return (
  <div ><img height="400px" width="350px" className="img-post" src={props.src}  alt={props.alt}/></div>
      );
}

export default Image;