import React from 'react';
import {Route, Routes} from "react-router";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<h1>Main path page</h1>}
            />
            <Route path="*" element={<h1>Not main path page</h1>}/>
        </Routes>
    );
};

export default App;

