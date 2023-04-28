import React from 'react';
import {FCChildrenProps} from "../../typings/common";
import {HeaderWrapper, Logo, LogoAndMenu, Menu, MenuItem, Token} from "./styled";
import logo from '../../assets/logo-small.svg';
import {tokenCookie} from "../../connections/cookies/token";
import {routes} from "../../router";

const mask = (str: string, mask: string, startLength: number, endLen: number) => {
    return str.slice(0, startLength) + mask + str.slice(str.length - endLen, str.length);
}

const Header: React.FC<FCChildrenProps> = () => {
    const {token} = tokenCookie();

    const renderMenu = () => {
        return (
            <Menu>
                {routes.map(({menuName, path}, index) => (
                    <MenuItem key={index} to={path}>{menuName}</MenuItem>
                ))}
            </Menu>
        )
    };

    return (
        <HeaderWrapper>
            <LogoAndMenu>
                <Logo src={logo} alt="AI Bridge logo"/>
                {renderMenu()}
            </LogoAndMenu>
            <Token>{token && mask(token, '...', 3, 4)}</Token>
        </HeaderWrapper>
    );
};

export default Header;