import React from 'react';
import Home from "./pages/homepage/Home";
import {Login} from "./pages/authorizationpages/Login"
import {SignUp} from "./pages/authorizationpages/SignUp"
import NewFeed from "./pages/newfeedpage/NewFeed";
export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <NewFeed />
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
    },
    {
        path: '/profile',
        exact: false,
        main: () => <Home />
    }
]