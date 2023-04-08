import {css} from "@emotion/css";
import React, {useEffect, useRef, useState} from 'react';
import plotCanvas from "../../components/landing/river_wave";
import Arrow from "../../assets/images/arrow";
import OpenAI from "../../assets/images/openai";
import PleasedYou from "../../assets/images/pleasedyou";
import {
    AbsoluteObject,
    Background,
    Centered,
    CenteredX,
    Column,
    LargeTitle,
    Row,
    Title,
    TitlesContainer
} from "./styled";

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

const LandingTitles = () => <TitlesContainer>
    <Title>опен эйай без випиена юзай</Title>
    <LargeTitle>ai bridge</LargeTitle>
</TitlesContainer>;


const Landing: React.FC = () => {
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
            <canvas id="wave" width={useWindowSize().width} height={titleHeight + 400}/>
        </AbsoluteObject>
        <AbsoluteObject width={String(useWindowSize().width)} height={String(useWindowSize().height)}>
            <canvas id="river" width={useWindowSize().width} height={useWindowSize().height}/>
        </AbsoluteObject>
        <CenteredX width={String(useWindowSize().width)} height="">
            <Column align="center" justify="center">
                <div ref={landingTitlesRef}><LandingTitles/></div>
                <Row align="start" justify="center" className={css`gap: 400px;`}>
                    <Column align="end" justify="center">
                        <Arrow/>
                        <OpenAI/>
                    </Column>
                    <Column align="start" justify="center">
                        <div className={css`rotate: 110deg`}><Arrow/></div>
                        {/* <PleasedYou /> */}
                        <div className={css`margin-left: 150px`}><PleasedYou/></div>

                    </Column>
                </Row>
            </Column>
        </CenteredX>
        <Centered width={String(useWindowSize().width)} height={String(useWindowSize().height)}>
            <div className={css`color: white`}>Пролив<br/>Випиеновый</div>
        </Centered>
    </Background>
}

export default Landing;