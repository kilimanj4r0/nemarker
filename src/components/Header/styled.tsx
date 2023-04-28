import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
  height: var(--size-header-height);
`;

export const LogoAndMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: var(--size-header-height);
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;

export const Token = styled.div`
  font-size: 36px;
`;

export const MenuItem = styled.div<{ chosen: boolean }>`
  cursor: pointer;
  font-size: 36px;
  color: ${({chosen}) => chosen ? 'var(--color-red-accent)' : 'var(--color-dark)'};
`;
