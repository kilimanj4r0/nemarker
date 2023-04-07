import React from 'react';
import {Route, Routes} from "react-router";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Landing from "./pages/Landing/Landing";
import Page from "./components/Page/Page";
import {Global} from "@emotion/react";
import {globalStyles} from "./globalStyles";

const App = () => {
    return (
        <>
            <Global
                styles={globalStyles}
            />
            <Page id="nemarker">
                <Routes>
                    <Route
                        path="/nemarker"
                        element={<Main/>}
                    />
                    <Route
                        path="/nemarker/about"
                        element={<About/>}
                    />
                    <Route
                        path="/nemarker/landing"
                        element={<Landing/>}
                    />
                </Routes>
            </Page>
        </>
    )
}

export default App;

