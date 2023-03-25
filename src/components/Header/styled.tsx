import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 16px;
  padding: 0;
  height: 80px;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;


export const MenuItem = styled.div<{chosen: boolean}>`
  cursor: pointer;
  font-size: 36px;
  color: ${({chosen}) => chosen ? '#fc5130' : '#303036'};
`;
