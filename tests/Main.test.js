import {describe, expect, it} from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Main from '../src/pages/Main/Main';

describe('Main page', () => {
    it('renders correctly', () => {
        const { container } = render(<Main />);
        expect(container).toBeInTheDocument();
    });
})
