import React from 'react';
import {Global} from "@emotion/react";
import {globalStyles} from "./globalStyles";
import {RouterProvider} from "react-router-dom";
import router from "./router";


const App = () => {
    return (
        <>
            <Global styles={globalStyles} />
            <RouterProvider router={router} />
        </>
    )
}

export default App;

