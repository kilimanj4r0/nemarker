import React from 'react';
import {Layout, Menu} from 'antd';
import {FCChildrenProps} from "../types/common";
import styled from "@emotion/styled";
import logo from '../assets/logo-small.svg';

const {Content, Header} = Layout;

const StyledLayout = styled(Layout)`
  background: white;
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: white;
  display: flex;
  align-items: center;
  margin: 24px 16px;
  padding: 0;
  height: 80px;
`;

const StyledMenu = styled(Menu)`
  background: aqua;
`;

const StyledContent = styled(Content)`
  height: 100%;
  background: coral;
`;

const StyledLogo = styled.img`
  width: 80px;
`;

const MenuItem = styled.div`
  background: crimson;
`;

const menuItems = [
    <MenuItem>ai bridge</MenuItem>,
    <MenuItem>о нас</MenuItem>,
    <MenuItem>лендинг</MenuItem>,
].map((item, index) => {
    return {
        key: index,
        label: item,
    }
});

const PageWrapper: React.FC<FCChildrenProps> = ({children}) => {
    return (
        <StyledLayout>
            <StyledHeader>
                <StyledLogo src={logo} alt="AI Bridge logo"/>
                <StyledMenu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={menuItems}
                />
            </StyledHeader>
            <StyledContent>
                {children}
            </StyledContent>
        </StyledLayout>
    );
};

export default PageWrapper;