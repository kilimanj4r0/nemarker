import React from 'react';
import {FCChildrenProps} from "../../typings/common";
import Header from "../Header/Header";
import {Content, Layout} from "./styled";

const Page: React.FC<FCChildrenProps> = ({children}) => {
    return (
        <Layout>
            <Header/>
            <Content>
                {children}
            </Content>
        </Layout>
    );
};

export default Page;