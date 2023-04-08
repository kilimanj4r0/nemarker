import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  margin: 16px 96px;
  align-content: center;
  justify-content: flex-start;
  align-items: normal;

  font-weight: 530;
  font-size: 32px;
`;

export const ServiceDescriptionBlock = styled.div`
  span {
    color: var(--color-red-accent);
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Profile = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 16px;
  font-size: 36px;
`;

export const ProfilePhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
`;

export const Description = styled.div`
  font-size: 20px;
  font-weight: 400;
`;