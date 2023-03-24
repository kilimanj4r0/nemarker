import React from 'react';
import {Layout, Menu} from 'antd';
import {FCChildrenProps} from "../types/common";
import styled from "@emotion/styled";

const {Content} = Layout;

const StyledMenu = styled(Menu)`
  background: aqua;
`;

const menuItems = [
    <div>Logo</div>,
    <div>о нас</div>,
    <div>лендинг</div>,
]

const PageWrapper: React.FC<FCChildrenProps> = ({children}) => {
    return (
        <Layout>
            <StyledMenu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={menuItems.map((item, index) => {
                    return {
                        key: index,
                        label: item,
                    }
                })}
            />
            <Content>
                {children}
            </Content>
        </Layout>
    );
};

export default PageWrapper;