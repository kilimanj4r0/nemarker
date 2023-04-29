import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../components/Header/Header';
import {BrowserRouter} from 'react-router-dom';


describe('Page', () => {
    it('renders correctly', () => {
        const { container } = render(<BrowserRouter><Header/></BrowserRouter>);
        expect(container).toBeInTheDocument();
    });
})
