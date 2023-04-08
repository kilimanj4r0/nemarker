import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDom from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import './globalStyles';

export default () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export const mount = (Component, element = document.getElementById('app')) => {
    const root = ReactDOM.createRoot(element);
    root.render(<Component/>);

    if(module.hot) {
        module.hot.accept('./app', ()=> {
            root.render(<Component/>);
        })
    }
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};

