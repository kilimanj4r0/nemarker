import styled from "@emotion/styled";
import { css } from "@emotion/css";
import React, { useRef, useState, useEffect } from 'react';
import plotCanvas from "../components/landing/river_wave";
import Arrow from "../assets/images/arrow";
import OpenAI from "../assets/images/openai";
import PleasedYou from "../assets/images/pleasedyou";

// Define general type for useWindowSize hook, which includes width and height
interface Size {
    width: number | undefined;
    height: number | undefined;
}

function useWindowSize(): Size {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

const Background = styled.div`
    height: 100vh;
    background: #FEFAFF;
    overflow: visible;
    position: relative;
`;
const LargeTitle = styled.h1`
    font-family: 'Golos Text VF';
    font-style: normal;
    font-weight: 500;
    font-size: 120px;
    line-height: 110%;
    letter-spacing: -0.03em;

    background: none;
    color: white;
    margin: 0;
`;
const Title = styled.h1`
    font-family: 'Golos Text VF';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 110%;
    letter-spacing: -0.02em;

    background: none;
    color: white;
    margin: 0;
`;
const TitlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: start;
    z-index: 1;
    margin-top: 40px;
`;

type ContainerProps = {
    width: string,
    height: string;
}
const AbsoluteObject = styled.div<ContainerProps>`
    position: absolute;
    width: ${props => props.width};
    height: ${props => props.height};
`;
const Centered = styled.div<ContainerProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    width: ${props => props.width};
    height: ${props => props.height};
    line-break: anywhere;
    text-align: center;
`;
const CenteredX = styled.div<ContainerProps>`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: ${props => props.width};
`;

interface ContainerAlignment {
    align: string,
    justify: string
}
const Column = styled.div<ContainerAlignment>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
`;
const Row = styled.div<ContainerAlignment>`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
`;

const Landing: React.FC = () => {
    const LandingTitles = () => <TitlesContainer>
        <Title>опен эйай без випиена юзай</Title>
        <LargeTitle>ai bridge</LargeTitle>
    </TitlesContainer>;
    const [titleHeight, setTitleHeight] = useState(0);
    const landingTitlesRef = useRef(null);
    useEffect(() => {
        if (landingTitlesRef.current != null) {
            setTitleHeight(landingTitlesRef.current.clientHeight)
        }
    })
    setTimeout(() => {
        plotCanvas();
    }, 0);

    return <Background>
        <AbsoluteObject width={String(useWindowSize().width)} height={String(useWindowSize().height)}>
            <canvas id="wave" width={useWindowSize().width} height={titleHeight + 400} />
        </AbsoluteObject>
        <AbsoluteObject width={String(useWindowSize().width)} height={String(useWindowSize().height)}>
            <canvas id="river" width={useWindowSize().width} height={useWindowSize().height} />
        </AbsoluteObject>
        <CenteredX width={String(useWindowSize().width)} height="">
            <Column align="center" justify="center">
                <div ref={landingTitlesRef}><LandingTitles /></div>
                <Row align="start" justify="center" className={css`gap: 400px;`}>
                    <Column align="end" justify="center">
                        <Arrow />
                        <OpenAI />
                    </Column>
                    <Column align="start" justify="center">
                        <div className={css`rotate: 110deg`}><Arrow /></div>
                        {/* <PleasedYou /> */}
                        <div className={css`margin-left: 150px`}><PleasedYou /></div>

                    </Column>
                </Row>
            </Column>
        </CenteredX>
        <Centered width={String(useWindowSize().width)} height={String(useWindowSize().height)}>
            <div className={css`color: white`}>Пролив<br />Випиеновый</div>
        </Centered>
    </Background >
}

export default Landing;