import React from 'react';
import {FCChildrenProps} from "../../typings/common";
import Header from "../Header/Header";
import {Content, Layout} from "./styled";

const Page: React.FC<FCChildrenProps & { id: string }> = ({children, id}) => {
    return (
        <Layout id={id}>
            <Header/>
            <Content>
                {children}
            </Content>
        </Layout>
    );
};

export default Page;