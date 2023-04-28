import { css } from "@emotion/css";
import React, { useEffect, useRef, useState } from 'react';
import plotCanvas from "../../components/landing/river_wave";
import Arrow from "../../assets/images/arrow";
import OpenAI from "../../assets/images/openai";
import PleasedYou from "../../assets/images/pleasedyou";
import { Button } from "../../components/Form/styled";
import {
    AbsoluteObject,
    Background,
    Centered,
    CenteredX,
    Column,
    LargeTitle,
    Row,
    Title,
    TitlesContainer,
    SizedBox,
    HV1Container
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
    <Title align="center" color="white">опен эйай без випиена юзай</Title>
    <LargeTitle align="center" color="white">ai bridge</LargeTitle>
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
        {/* empty space in the non-absolute flow to fill space of the first slide */}
        <SizedBox width='1' height={String(useWindowSize().height) + 'px'} />

        <HV1Container><div className={css`padding-top: 80px; padding-bottom: 80px; padding-right: 80px;`}><Row align="start" justify="space-between">
            <img src={require("../../assets/images/p2.png")} height={String(useWindowSize().height * 0.5)} />
            <LargeTitle align="end" color="#303035">выберите шаблон</LargeTitle>
        </Row></div></HV1Container>


        <HV1Container><div className={css`padding: 80px`}><Column justify="start" align="stretch">
            <LargeTitle align="end" color="#303035">соберите сложный запрос</LargeTitle>
            <SizedBox width="0" height="80px" />
            <Row justify="center" align="center"><img src={require("../../assets/images/p3.png")} height={String(useWindowSize().height * 0.5 / 3.8)} /></Row>
        </Column></div></HV1Container>

        <HV1Container><div className={css`padding: 80px`}><Column justify="start" align="stretch">
            <LargeTitle align="end" color="#303035">вставьте текст</LargeTitle>
            <SizedBox width="0" height="80px" />
            <Row justify="center" align="center"><img src={require("../../assets/images/p4.png")} height={String(useWindowSize().height * 0.5 / 1.88)} /></Row>
        </Column></div></HV1Container>

        <HV1Container><div className={css`padding: 80px`}><Column justify="start" align="stretch">
            <LargeTitle align="end" color="#303035"><div className={css`color: #FC5130`}>ai bridge</div> выведет результат</LargeTitle>
            <SizedBox width="0" height="80px" />
            <Row justify="center" align="center"><img src={require("../../assets/images/p5.png")} height={String(useWindowSize().height * 0.5 / 3.3)} /></Row>
            <SizedBox width="0" height="80px" />
            <Row justify="center" align="center"><Button>начать писать</Button></Row>
        </Column></div></HV1Container>
    </Background>
}

export default Landing;