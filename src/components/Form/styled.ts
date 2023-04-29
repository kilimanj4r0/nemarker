import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const inputStyles = css`
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

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 100%;
`;

