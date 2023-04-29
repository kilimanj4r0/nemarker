import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import API from "../../../connections/api";
import {Input, FormWrapper} from "../styled";
import {Button} from "../../Button";
import {ButtonsWrapper, Result, TextArea} from "./styled";
import {PropagateLoader} from "react-spinners";
import {colors} from "../../../globalStyles";

type FormInputs = {
    prompt: string;
    text?: string;
}

const MainForm: React.FC = () => {
    const [result, setResult] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const {register, handleSubmit, reset} = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        setLoading(true);
        API.getCompletion(data.prompt, data.text).then((res) => {
            console.log(res)
            setResult(res.data.choices[0].message.content);
        }).finally(() => setLoading(false));
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Input required placeholder="что сделать?" {...register("prompt")} />
            <TextArea placeholder="с каким текстом?" {...register("text")} />
            <ButtonsWrapper>
                <Button>запустить</Button>
                {result && <>
                    <Button type="button" light onClick={
                        () => navigator.clipboard.writeText(result)
                    }>скопировать</Button>
                    <Button type="reset" light onClick={() => {
                        reset();
                        setResult('');
                    }}>удалить</Button>
                </>}
            </ButtonsWrapper>
            {loading && <PropagateLoader color={colors.redAccent} size={20} style={{marginRight: 15}} />}
            {result && <Result>{result}</Result>}
        </FormWrapper>
    );
};

export default MainForm;
