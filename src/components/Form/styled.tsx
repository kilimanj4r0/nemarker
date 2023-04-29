import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";
import {css} from "@emotion/react";

const inputStyles = css`
  width: 800px;
  background: var(--color-white);
  border: 2px solid var(--color-dark);
  box-sizing: border-box;

  font-family: 'GolosTextWebVF', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  padding: 10px;
`;

export const Input = styled.input`
  ${inputStyles};
  height: 50px;
`;

export const TextArea = styled(TextareaAutosize)`
  ${inputStyles};
  max-height: 500px;
  resize: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 100%;
`;

export const Button = styled.button`
  background: var(--color-red-accent);
  padding: 9px 16px 12px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px; /* identical to box height */
  text-align: center;
  color: var(--color-white);
  border: none;
  
  &:hover {
    cursor: pointer;
  }
`;