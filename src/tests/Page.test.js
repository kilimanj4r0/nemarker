import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Page from '../components/Page/Page';
import {BrowserRouter} from 'react-router-dom';


describe('Page', () => {
    it('renders correctly', () => {
        const { container } = render(<BrowserRouter><Page><div>Test Page</div></Page></BrowserRouter>);
        expect(container).toBeInTheDocument();
    });
})
