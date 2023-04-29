// import {describe, expect, it} from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import About from '../src/pages/About/About';

describe('About page', () => {
    it('renders correctly', () => {
        const { container } = render(<About />);
        expect(container).toBeInTheDocument();
    })

    it('has a expected text elements', () => {
        const {getByText} = render(<About />);
        expect(getByText('ai bridge')).toBeInTheDocument();
    });

    it('has expected team member names', () => {
        const { container } = render(<About />);
        const nameRegex = /^[A-ZА-ЯЁ][a-zа-яё]*\s[A-ZА-ЯЁ][a-zа-яё]*$/;
        const foundElements = findElementsWithContent(container, nameRegex);
        expect(foundElements.length).toBe(4);
    });
      
    function findElementsWithContent(element, regex) {
        const foundElements = [];
      
        if (regex.test(element.textContent)) {
          foundElements.push(element);
        }
      
        for (const child of element.children) {
          const foundChildElements = findElementsWithContent(child, regex);
          foundElements.push(...foundChildElements);
        }
      
        return foundElements;
    }


});