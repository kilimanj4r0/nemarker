import React from "react";
import styled from "@emotion/styled";
import {Button} from "./Button";
import {useFormContext} from "react-hook-form";

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Card = styled(Button)`
    width: fit-content;
    font-weight: 530;
    text-align: left;
    background: var(--color-blue-accent);
`

const buttons = [
    'сократить',
    'удлинить',
    'перефразировать',
    'суммаризировать',
    'переписать формально',
    'переписать простыми словами'
]

export const CardsBar: React.FC = () => {
    const {setValue} = useFormContext();

    return (
        <CardsWrapper>
            {buttons.map((button, index) => (
                <Card key={index} onClick={
                    () => setValue('prompt', button)
                }>{button}</Card>
            ))}
        </CardsWrapper>
    )
}