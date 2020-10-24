import React from 'react';
import Home from "./pages/homepage/Home";
import {Login} from "./pages/authorizationpages/Login"
import {SignUp} from "./pages/authorizationpages/SignUp"

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