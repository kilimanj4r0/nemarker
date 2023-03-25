import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";

export const Input = styled.input`
    width: 800px;
    height: 50px;
    background: #FFFFFF;
    border: 2px solid #303035;
    box-sizing: border-box;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
`

export const TextArea = styled(TextareaAutosize)`
    width: 800px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 2px solid #303035;
  
    padding: 10px 0;
  
    max-height: 500px;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;

    resize:none;
`