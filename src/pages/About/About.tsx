import React from "react";
import {Block, Description, Profile, ProfilePhoto, ServiceDescriptionBlock, Wrapper} from "./styled";
import mock from '../../assets/logo-small.svg';

type TeamType = {
    photoSrc: string;
    name: string;
    description: string;
};

const team: TeamType[] = [
    {
        photoSrc: mock,
        name: 'Имя Фамилия',
        description: 'Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.'
    },
    {
        photoSrc: mock,
        name: 'Имя Фамилия',
        description: 'Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.'
    },
    {
        photoSrc: mock,
        name: 'Имя Фамилия',
        description: 'Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.'
    },
    {
        photoSrc: mock,
        name: 'Имя Фамилия',
        description: 'Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.'
    },
];

const renderTeam = () => {
    return team.map(({photoSrc, name, description}, index) =>
        <>
            <Block>
                <Profile>
                    <ProfilePhoto src={photoSrc} alt={name}/>
                    {name}
                </Profile>
                <Description>{description}</Description>
            </Block>
            {index === 1 && <Block/>}
        </>
    )
}

const About: React.FC = () => {
    return (
        <Wrapper>
            <ServiceDescriptionBlock>
                <span>ai bridge</span> — это сервис с использованием ИИ для сетевого онанизма.
            </ServiceDescriptionBlock>
            {renderTeam()}
        </Wrapper>
    );
};

export default About;
