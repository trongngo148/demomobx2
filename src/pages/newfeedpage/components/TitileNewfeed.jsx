import React from 'react';
import StoreService from '../../../store/Store'
import StoreImgService from '../../../store/ImgStore'
import {useHistory} from 'react-router-dom'
const TitileNewfeed = () => {
    const store = React.useContext(StoreService);
    const imgStore = React.useContext(StoreImgService);
    const history = useHistory();
    const  handleOnClick = () => {
        store.addPost(imgStore.getImage);
        imgStore.fetchImage();
    }
    const handleGoToProfile = () => {
        history.push({
            pathname: "/profile",
        })
    }
    return(
    <>
        <h1 className="title-home">Welcome to News Feed</h1>
        <h1 className="title-home">{store.userName}, </h1>
        <input type="button" value="Create A New Picture" onClick={handleOnClick}/>
        <input type="button" value="Go to profile" onClick={handleGoToProfile}/>
    </>
        
    );
}
export default TitileNewfeed