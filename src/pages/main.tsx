import React from "react";
import PageWrapper from "../components/PageWrapper";
import {Button, Form, Input, TextArea} from "../components/form/styled";

const MainPage: React.FC = () => {
    return (
        <PageWrapper>
            <Form>
                <Input placeholder="что сделать?" />
                <TextArea placeholder="с каким текстом?" />
                <Button>запустить</Button>
            </Form>
        </PageWrapper>
    )
}

export default MainPage;