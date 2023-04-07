import React from "react";
import {Container, Description, Profile, ProfilePhoto} from "./styled";
import mock from 'remote-assets/logo-small.svg';

const About: React.FC = () => {
    return (
        <Container>
            <div className="box-1">
                <span style={{color: `#fc5130`}}>ai bridge</span> — это сервис с использованием ИИ для сетевого
                онанизма.
            </div>

            <div className="box-2">
                <Profile>
                    <ProfilePhoto src={mock} alt="pokemon-one"/>
                    Имя Фамилия
                </Profile>
                <Description>
                    Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
                </Description>
            </div>
            <div className="box-4">
                <Profile>
                    <ProfilePhoto src={mock} alt="pokemon-one"/>
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
                    <ProfilePhoto src={mock} alt="pokemon-one"/>
                    Имя Фамилия
                </Profile>
                <Description>
                    Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
                </Description>
            </div>
            <div className="box-4">
                <Profile>
                    <ProfilePhoto src={mock} alt="pokemon-one"/>
                    Имя Фамилия
                </Profile>
                <Description>
                    Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
                </Description>
            </div>
        </Container>
    );
};

export default About;
