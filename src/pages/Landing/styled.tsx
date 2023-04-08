import styled from "@emotion/styled";

export const Background = styled.div`
    //position: relative;
`;
export const LargeTitle = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 120px;
    line-height: 110%;
    letter-spacing: -0.03em;

    background: none;
    color: white;
    margin: 0;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 110%;
    letter-spacing: -0.02em;

    background: none;
    color: white;
    margin: 0;
`;

export const TitlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: start;
    z-index: 1;
    margin-top: 40px;
`;

export type ContainerProps = {
    width: string,
    height: string;
}
export const AbsoluteObject = styled.div<ContainerProps>`
    position: absolute;
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const Centered = styled.div<ContainerProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    width: ${props => props.width};
    height: ${props => props.height};
    line-break: anywhere;
    text-align: center;
`;

export const CenteredX = styled.div<ContainerProps>`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: ${props => props.width};
`;

export interface ContainerAlignment {
    align: string,
    justify: string
}

export const Column = styled.div<ContainerAlignment>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
`;

export const Row = styled.div<ContainerAlignment>`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
`;