import React from 'react';
import {FCChildrenProps} from "../../typings/common";
import Header from "../Header";
import {Content, Layout} from "./styled";
import {Outlet} from "react-router-dom";
import {Head} from "../Head";

const Page: React.FC<{ id: string }> = ({id}) => {
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