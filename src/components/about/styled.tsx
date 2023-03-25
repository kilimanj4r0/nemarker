import styled from "@emotion/styled";

export const Container = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 30px;
    align-content: center;
    justify-content: flex-start;
    align-items: normal;

    font-weight: 530;
    font-size: 32px;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 8px;
    height: 80px;
`

export const ProfilePhoto = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 80px;
`

export const Description = styled.div`
    font-size: 20px;
    font-weight: 400;
    //width: 530px;
    //height: 50px;
`