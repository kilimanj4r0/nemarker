import React from 'react';
import {FCChildrenProps} from "../../typings/common";
import {Logo, LogoAndMenu, Menu, MenuItem, Token, Wrapper} from "./styled";
import logo from '../../assets/logo-small.svg';
import {tokenCookie} from "../../connections/cookies/token";
import {routes} from "../../router";
import {useMatch} from "react-router-dom";

const mask = (str: string, mask: string, startLength: number, endLen: number) => {
    return str.slice(0, startLength) + mask + str.slice(str.length - endLen, str.length);
}

const Header: React.FC<FCChildrenProps> = () => {
    const {token} = tokenCookie();
    const isLandingRoute = useMatch("/landing");

    console.log(isLandingRoute)

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
        <Wrapper landing={!!isLandingRoute}>
            <LogoAndMenu>
                <Logo src={logo} alt="AI Bridge logo"/>
                {renderMenu()}
            </LogoAndMenu>
            <Token>{token && mask(token, '...', 3, 4)}</Token>
        </Wrapper>
    );
};

export default Header;