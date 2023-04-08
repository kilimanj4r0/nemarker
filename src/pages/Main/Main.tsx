import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {Button, Form, Input, TextArea} from "../../components/Form/styled";
import API from "../../api";

type FormInputs = {
    prompt: string;
    text?: string;
}

const Main: React.FC = () => {
    const [result, setResult] = React.useState<string>('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        API.getCompletion(data.prompt, data.text).then((res) => {
            console.log(res)
            setResult(res.data.choices[0].message.content);
        });
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input required placeholder="что сделать?" {...register("prompt")} />
            <TextArea placeholder="с каким текстом?" {...register("text")} />
            <Button type="submit">запустить</Button>
            {result && <div style={{maxWidth: 800}}>{result}</div>}
        </Form>
    );
}

export default Main;