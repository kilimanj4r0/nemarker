import React from 'react';
import {Layout} from 'antd';
import {FCChildrenProps} from "../types/common";
import styled from "@emotion/styled";
// @ts-ignore
import logo from '../assets/logo-small.svg';

const {Content} = Layout;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 16px;
  padding: 0;
  height: 80px;
`;

const StyledContent = styled(Content)`
  height: 100%;
  background: #FEFAFF;
`;

const Logo = styled.img`
  width: 80px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;


const MenuItem = styled.div`
    font-size: 36px;
`;

const menuItems = [
    'ai bridge',
    'о нас',
    'лендинг',
];

const renderMenu = () => {
    return (
        <Menu>
            {menuItems.map((name, index) => (
                <MenuItem key={index}>{name}</MenuItem>
            ))}
        </Menu>
    )
}

const PageWrapper: React.FC<FCChildrenProps> = ({children}) => {
    return (
        <StyledLayout>
            <Header>
                <Logo src={logo} alt="AI Bridge logo"/>
                {renderMenu()}
            </Header>
            <StyledContent>
                {children}
            </StyledContent>
        </StyledLayout>
    );
};

export default PageWrapper;