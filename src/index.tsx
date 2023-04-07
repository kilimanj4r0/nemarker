import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import './globalStyles';

export default () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export const mount = (Сomponent) => {
    ReactDom.render(
        <Сomponent/>,
        document.getElementById('app')
    );

    if (module.hot) {
        module.hot.accept('./app', () => {
            ReactDom.render(
                <App/>,
                document.getElementById('app')
            );
        })
    }
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};

