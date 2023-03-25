import React from "react";
import PageWrapper from "../components/PageWrapper";
import {Container, Description, Profile, ProfilePhoto} from "../components/about/styled";
import vova from "src/assets/photo.png";

const AboutPage: React.FC = () => {
    return (
        <PageWrapper>
            <Container>
                <div className="box-1">
                    <span style={{color: `#fc5130`}}>ai bridge</span> — это сервис с использованием ИИ для сетевого онанизма.
                </div>

                <div className="box-2">
                    <Profile>
                        <ProfilePhoto src={vova} alt="pokemon-one" />
                        Имя Фамилия
                    </Profile>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
                    </Description>
                </div>
                <div className="box-4">
                    <Profile>
                        <ProfilePhoto src={vova} alt="pokemon-one" />
                        Имя Фамилия
                    </Profile>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
                    </Description>
                </div>
                <div className="box-4">
                </div>
                <div className="box-4">
                    <Profile>
                        <ProfilePhoto src={vova} alt="pokemon-one" />
                        Имя Фамилия
                    </Profile>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
                    </Description>
                </div>
                <div className="box-4">
                    <Profile>
                        <ProfilePhoto src={vova} alt="pokemon-one" />
                        Имя Фамилия
                    </Profile>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
                    </Description>
                </div>
            </Container>
        </PageWrapper>
    );
};

export default AboutPage;
