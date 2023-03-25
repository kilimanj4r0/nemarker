import React, {useState} from 'react';
import {FCChildrenProps} from "../../typings/common";
import {Logo, Menu, MenuItem, Wrapper} from "./styled";
import logo from 'src/remote-assets/logo-small.svg';
import {useNavigate} from "react-router-dom";

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

const Header: React.FC<FCChildrenProps> = () => {
    const [chosenItem, setChosenItem] = useState<number>(0);
    const navigate = useNavigate();
    const menuItemOnClick = (index: number, route: string) => {
        setChosenItem(index);
        navigate(route);
    };

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
        <Wrapper>
            <Logo src={logo} alt="AI Bridge logo"/>
            {renderMenu()}
        </Wrapper>
    );
};

export default Header;