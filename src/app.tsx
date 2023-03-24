import React from 'react';
import {Route, Routes} from "react-router";
import PageWrapper from "./components/PageWrapper";

const App = () => {
    return (
        <Routes>
            <Route
                path="/nemarker"
                element={<PageWrapper><h1>Main path page</h1></PageWrapper>}
            />
            <Route path="*" element={<h1>Not main path page</h1>}/>
        </Routes>
    );
};

export default App;

