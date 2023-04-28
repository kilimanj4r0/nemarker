import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import API from "../../../connections/api";
import {Button, Input, TextArea, FormWrapper} from "../styled";

type FormInputs = {
    prompt: string;
    text?: string;
}

const MainForm = () => {
    const [result, setResult] = React.useState<string>('');
    const {register, handleSubmit, watch, formState: {errors}} = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        API.getCompletion(data.prompt, data.text).then((res) => {
            console.log(res)
            setResult(res.data.choices[0].message.content);
        });
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Input required placeholder="что сделать?" {...register("prompt")} />
            <TextArea placeholder="с каким текстом?" {...register("text")} />
            <Button type="submit">запустить</Button>
            {result && <div style={{maxWidth: 800}}>{result}</div>}
        </FormWrapper>
    );
};

export default MainForm;
