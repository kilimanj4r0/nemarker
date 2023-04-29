import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Page from '../src/components/Page';
import {BrowserRouter} from 'react-router-dom';


const mockedGetConfigValue = jest.fn((name) => {
    return {
        'nemarker.api': "/api/v1",
    }[name];
})
jest.mock('@ijl/cli', () => ({
    __esModule: true,
    // ...jest.requireActual('@ijl/cli'),
    getNavigations: jest.fn(() => ({
        'nemarker.main': '/',
        'nemarker.about': '/about',
        'nemarker.landing': '/landing',
    })),
    getConfigValue: () => mockedGetConfigValue,
}));


describe('Page', () => {
    it('renders correctly', () => {
        const { container } = render(<BrowserRouter><Page><div>Test Page</div></Page></BrowserRouter>);
        expect(container).toBeInTheDocument();
    });
})
