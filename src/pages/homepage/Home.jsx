import React, {useContext} from 'react';
import TitleHome from './components/TitileHome';
import BodyHome from './components/BodyHome';
import {Redirect } from 'react-router-dom';
import StoreService from "../../store/Store";
const Home = () =>{
    const  store = useContext(StoreService)
    return (
        !store.isUser ? <Redirect to="/login"/> : 
    <> 
        <TitleHome/>
        <BodyHome />
    </>
    )
}

export default Home