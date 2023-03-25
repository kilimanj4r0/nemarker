import React from "react";
import {Button, Form, Input, TextArea} from "../components/form/styled";
import Page from "../components/Page/Page";

const MainPage: React.FC = () => {
    return (
        <Page>
            <Form>
                <Input placeholder="что сделать?" />
                <TextArea placeholder="с каким текстом?" />
                <Button>запустить</Button>
            </Form>
        </Page>
    )
}

export default MainPage;