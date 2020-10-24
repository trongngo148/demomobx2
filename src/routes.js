import React from 'react';
import Home from "./components/Home";
import {Login} from "./components/Login"
import {SignUp} from "./components/SignUp"

export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/signup',
        exact: false,
        main: () => <SignUp />
    }
]