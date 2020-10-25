import React from 'react';
import StoreService from '../../../store/Store'
import StoreImgService from '../../../store/ImgStore'
const TitleHome = () => {
    const store = React.useContext(StoreService);
    const imgStore = React.useContext(StoreImgService);
    const  handleOnClick = () => {
        store.addPost(imgStore.getImage);
        imgStore.fetchImage();
    }
    return(
    <>
        <h1 className="title-home">Hi {store.userName}, </h1>
        <input type="button" value="Create A New Picture" onClick={handleOnClick}/>
    </>
        
    );
}
export default TitleHome