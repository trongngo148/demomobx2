import React, {useContext} from 'react';
import Comment from './Comment';
import CountComment  from './CountComment';
import Image from './Image';
import InputComment from './InputComment';
import StoreService from "../store/Store"
import {Redirect } from 'react-router-dom'
import TitleHome from './TitileHome';
import BodyHome from './BodyHome';

const Home = () =>{
    return (<>
        <TitleHome/>
        <BodyHome />
    </>
    )
}

export default Home