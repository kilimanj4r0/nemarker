import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input, FormWrapper} from "../styled";
import {tokenCookie} from "../../../connections/cookies/token";
import {Button} from "../../Button";

type FormInputs = {
    token: string;
}

const TokenForm = () => {
    const {register, handleSubmit} = useForm<FormInputs>();
    const {setToken} = tokenCookie();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        setToken(data.token);
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Input required placeholder="введите токен" {...register("token")} />
            <Button type="submit">войти</Button>
        </FormWrapper>
    );
};

export default TokenForm;
