import styled from "@emotion/styled";

export const Layout = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  height: calc(100vh - var(--size-header-height) - var(--size-header-height-padding));
  background: var(--color-red-superlight);
`;
