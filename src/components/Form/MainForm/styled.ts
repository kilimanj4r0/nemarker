import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";
import {inputStyles} from "../styled";

export const TextArea = styled(TextareaAutosize)`
  ${inputStyles};
  max-height: 200px;
  resize: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 800px;
  justify-content: center;
  gap: 8px;
`;

export const Result = styled.div`
  max-width: 800px;
  max-height: 200px;
  overflow: auto;
  white-space: pre-wrap;
`;