import {createBrowserRouter, RouteObject} from "react-router-dom";
import {getNavigations} from "@ijl/cli";
import React from "react";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Landing from "./pages/Landing/Landing";
import Page from "./components/Page/Page";

const configNavigations = getNavigations();

const routesElements = {
    'nemarker.main': {
        element: <Main/>,
        menuName: 'ai bridge',
    },
    'nemarker.about': {
        element: <About/>,
        menuName: 'о нас',
    },
    'nemarker.landing': {
        element: <Landing/>,
        menuName: 'лендинг',
    },
}

export const routes = Object.entries(routesElements)
    .filter(([key]) => configNavigations[key])
    .map(([key, params]) => ({
        path: configNavigations[key],
        ...params,
    }));

console.log(routes);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Page id="nemarker"/>,
        children: routes,
    }
], {basename: '/nemarker'});

export default router;
