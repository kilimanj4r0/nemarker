import React from "react";
import {Button, Form, Input, TextArea} from "../../components/Form/styled";

const Main: React.FC = () => {
    return (
        <Form>
            <Input placeholder="что сделать?"/>
            <TextArea placeholder="с каким текстом?"/>
            <Button>запустить</Button>
        </Form>
    );
}

export default Main;