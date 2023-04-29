import {describe, expect, it} from '@jest/globals';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { screen, configure } from '@testing-library/react'
import Main from '../src/pages/Main';
import {act} from "react-dom/test-utils";


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

describe('Main page', () => {
    it('token field check', () => {
        const { container, getByPlaceholderText } = render(<Main />);
        expect(getByPlaceholderText("введите токен")).toBeInTheDocument();
    });

    it('main form check', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: 'token=omnomnom',
        });
        Object.defineProperty(document, 'fonts', {
            value: { addEventListener: jest.fn(), removeEventListener: jest.fn() },
        })
        const { container, getByPlaceholderText } = render(<Main />);
        expect(getByPlaceholderText("что сделать?")).toBeInTheDocument();
    });

    it('token field check', async () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: '',
        });

        const { container, getByPlaceholderText, getByText } = render(<Main />);

        act(() => {
            getByPlaceholderText("введите токен").value = 'kjsanfkdf';
            getByText('войти').click();
        })

        await waitFor(() => {
            expect(document.cookie).toContain('token=');
        });

    });
})
