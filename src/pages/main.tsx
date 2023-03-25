import React from "react";
import PageWrapper from "../components/PageWrapper";
import {Input, TextArea} from "../components/form/styled";

const MainPage: React.FC = () => {
    return (
        <PageWrapper>
            <div>
                <Input placeholder="что сделать?"></Input>
                <br /><br /><br />
                <TextArea placeholder="с каким текстом?" />
            </div>
        </PageWrapper>
    )
}

export default MainPage;