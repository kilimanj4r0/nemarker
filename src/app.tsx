import React from 'react';
import {Route, Routes} from "react-router";
import MainPage from "./pages/main";
import AboutPage from "./pages/about";

const App = () => {
    return (
        <Routes>
            <Route
                path="/nemarker"
                element={<MainPage />}
            />
            <Route
                path="/nemarker/about"
                element={<AboutPage />}
            />
        </Routes>
    )
}

export default App;

