import React, {useContext} from 'react';
import TitleNewfeed from './components/TitileNewfeed';
import BodyNewfeed from './components/BodyNewfeed';
import {Redirect } from 'react-router-dom';
import StoreService from "../../store/Store";
const NewFeed = () =>{
    const  store = useContext(StoreService)
    return (
        !store.isUser ? <Redirect to="/login"/> : 
    <> 
        <TitleNewfeed/>
        <BodyNewfeed />
    </>
    )
}

export default NewFeed