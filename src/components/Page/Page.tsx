import React from 'react';
import {FCChildrenProps} from "../../typings/common";
import Header from "../Header/Header";
import {Content, Layout} from "./styled";
import {Outlet} from "react-router-dom";
import {Head} from "../Head";

const Page: React.FC<FCChildrenProps & { id: string }> = ({children, id}) => {
    return (
        <Layout id={id}>
            <Head />
            <Header />
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
};

export default Page;