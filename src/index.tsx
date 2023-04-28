import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDom from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import './globalStyles';
import {Favicon} from "./components/Favicon";

export default () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export const mount = (Component, element = document.getElementById('app')) => {
    document.title = 'AI Bridge';
    const root = ReactDOM.createRoot(element);
    root.render(<Component/>);
    ReactDom.render(<Favicon/>, document.head);

    if(module.hot) {
        module.hot.accept('./app', ()=> {
            root.render(<Component/>);
        })
    }
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};

