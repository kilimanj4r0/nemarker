import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header<{ landing: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
  height: var(--size-header-height);
  background: ${({landing}) => landing ? 'var(--color-blue-accent)' : 'var(--color-red-superlight)'};
`;

export const LogoAndMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: var(--size-header-height);
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;

export const Token = styled.div`
  font-size: 36px;
`;

export const MenuItem = styled(NavLink)`
  font-size: 36px;
  text-decoration: none;
  color: var(--color-dark);

  &.active {
    color: var(--color-red-accent);
  }
`;
