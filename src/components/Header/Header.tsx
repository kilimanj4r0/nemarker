import React, {useEffect, useState} from 'react';
import {FCChildrenProps} from "../../typings/common";
import {HeaderWrapper, Logo, Menu, MenuItem, Token, LogoAndMenu} from "./styled";
import logo from '../../assets/logo-small.svg';
import {useNavigate} from "react-router-dom";
import {tokenCookie} from "../../connections/cookies/token";

const BASE_ROUTE = '/nemarker'

const menuItems = [
    {
        name: 'ai bridge',
        route: BASE_ROUTE,
    },
    {
        name: 'о нас',
        route: BASE_ROUTE + '/about',
    },
    {
        name: 'лендинг',
        route: BASE_ROUTE + '/landing',
    },
];

const mask = (str: string, mask: string, startLength: number, endLen: number) => {
    return str.slice(0, startLength) + mask + str.slice(str.length - endLen, str.length);
}

const Header: React.FC<FCChildrenProps> = () => {
    const [chosenItem, setChosenItem] = useState<number>(0);
    const navigate = useNavigate();
    const {token} = tokenCookie();

    const menuItemOnClick = (index: number, route: string) => {
        setChosenItem(index);
        navigate(route);
        window.sessionStorage.setItem("chosenItem", String(index)); // store for refresh
    };

    useEffect(() => {
        const storageChosenItem = JSON.parse(window.sessionStorage.getItem("chosenItem"));
        setChosenItem(storageChosenItem ? storageChosenItem : 0); // load last chosenItem from storage
    }, []);

    const renderMenu = () => {
        return (
            <Menu>
                {menuItems.map(({name, route}, index) => (
                    <MenuItem key={index} onClick={() => menuItemOnClick(index, route)}
                              chosen={index === chosenItem}>
                        {name}
                    </MenuItem>
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