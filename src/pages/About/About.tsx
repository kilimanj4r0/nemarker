import React from "react";
import {Block, Description, Profile, ProfilePhoto, ServiceDescriptionBlock, Wrapper} from "./styled";
import mock from '../../assets/logo-small.svg';
import artem from '../../assets/images/photos/artem-batalov.png';
import vova from '../../assets/images/photos/vladimir-makharev.png';
import liza from '../../assets/images/photos/elizaveta-semenova.png';
import kamil from '../../assets/images/photos/kamil-foatov.png';

type TeamType = {
    photoSrc: string;
    name: string;
    description: string;
};

const team: TeamType[] = [
    {
        photoSrc: vova,
        name: 'Владимир Махарев',
        description: 'Тимлид, большой фронтендер и хороший человек'
    },
    {
        photoSrc: artem,
        name: 'Артем Баталов',
        description: 'Фулл-стэк, генератор идей'
    },
    {
        photoSrc: kamil,
        name: 'Камиль Фоатов',
        description: 'Дизайнер, стендапер, получатель сетевого онанизма'
    },
    {
        photoSrc: liza,
        name: 'Елизавета Семенова',
        description: 'Фронтендер по менбше, писатель тестов'
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
