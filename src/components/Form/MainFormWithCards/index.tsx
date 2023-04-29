import React from "react";
import {CardsBar} from "../../CardsBar";
import MainForm from "../MainForm";
import styled from "@emotion/styled";
import {FormProvider, useForm} from "react-hook-form";
import {FormInputs} from "../MainForm/types";

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: normal;
    align-items: center;
    min-height: 100%;
    flex: 1 7 auto;
`

const MainFormWithCards: React.FC = () => {
    const methods = useForm<FormInputs>();

    return (
        <FormProvider {...methods} >
            <MainWrapper>
                <CardsBar/>
                <MainForm/>
            </MainWrapper>
        </FormProvider>
    )
}

export default MainFormWithCards;
