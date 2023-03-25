import React from 'react';
import {Route, Routes} from "react-router";
import MainPage from "./pages/main";

const App = () => {
    return (
        <Routes>
            <Route
                path="/nemarker"
                element={<MainPage />}
            />
        </Routes>
    )
}

export default App;

