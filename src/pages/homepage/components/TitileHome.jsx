import React from 'react';
import StoreService from '../../../store/Store'
const TitleHome = () => {
    const store = React.useContext(StoreService);
    return(
        
    <>
        <h1 className="title-home">Hi {store.userName}, </h1>
    </>
        
    );
}
export default TitleHome