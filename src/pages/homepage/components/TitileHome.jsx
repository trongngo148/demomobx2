import React from 'react';
import StoreService from '../../../store/Store'
import StoreImgService from '../../../store/ImgStore'
import { observer } from "mobx-react-lite"
const TitleHome = () => {
    const store = React.useContext(StoreService);
    const imgStore = React.useContext(StoreImgService);
    
    const  handleOnClick = () => {
        imgStore.fetchImage();
        store.addPost(imgStore.getImage);
    }
    return(
    <>
        <h1 className="title-home">Hi {store.userName}, </h1>
        <input type="button" value="Create A New Picture" onClick={handleOnClick}/>
    </>
        
    );
}
export default observer(TitleHome)