import styled from "@emotion/styled";

export const Button = styled.button<{light?: boolean}>`
  background: ${({light}) => light ? `var(--color-red-light)` : `var(--color-red-accent)`};
  padding: 9px 16px 12px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px; /* identical to box height */
  text-align: center;
  color: ${({light}) => light ? `var(--color-red-accent)` : `var(--color-white)`};
  border: none;

  &:hover {
    cursor: pointer;
  }
`;