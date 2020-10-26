import React from 'react';
import StoreService from '../../../store/Store'
import StoreImgService from '../../../store/ImgStore'
import {useHistory} from 'react-router-dom'
const TitleHome = () => {
    const store = React.useContext(StoreService);
    const imgStore = React.useContext(StoreImgService);
    const history = useHistory();
    const  handleOnClick = () => {
        store.addPost(imgStore.getImage);
        imgStore.fetchImage();
    }
    const handleGoToProfile = () => {
        history.push({
            pathname: "/",
        })
    }
    return(
    <>
        <h1 className="title-home">Welcome to Profile</h1>
        <h1 className="title-home">{store.userName}, </h1>
        <input className="btn-title" type="button" value="Create A New Picture" onClick={handleOnClick}/>
        <input className="btn-title"  type="button" value="Go to home" onClick={handleGoToProfile}/>
    </>
        
    );
}
export default TitleHome