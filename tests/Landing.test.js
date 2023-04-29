import {describe, expect, it} from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Landing from '../src/pages/Landing';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Main page', () => { 
    // Test whether the Landing page renders correctly
    it('renders correctly', () => {
        const { container } = render(<Landing />);
        expect(container).toBeInTheDocument();
    });

    // Test whether the Landing page has an 
    // text element with proper contents
    it('has a expected text elements', () => {
        const { getByText, container, getAllByText } = render(<Landing />);
        expect(getAllByText('ai bridge').length).toBe(2)
        // Match splitted text with
        // custom matcher
        const regex = /Пролив.*Випиеновый/;
        const foundElement = findElementWithTextContent(container, regex);
        expect(foundElement).not.toBeNull();
    });

    function findElementWithTextContent(element, regex) {
        if (regex.test(element.textContent)) {
            return element;
        }
    
        for (const child of element.children) {
            const foundChild = findElementWithTextContent(child, regex);
            if (foundChild) {
                return foundChild;
            }
        }
    
        return null;
    }
    
});