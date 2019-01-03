import React from 'react';
import Heading from './../components/Heading';
import styled from '@emotion/styled';

const AboutWrapper = styled.div`
    background: var(--black);
    color: var(--white);
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 6fr 1fr;
    grid-gap: 1em;
    justify-content: center;
`;

const HeadingWrapper = styled.div`
    grid-column: 1/3;
    grid-row: 1/2;
    justify-self: center;
`;

const TextWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    padding: 1em;
    margin: .5em 3em;
`;

const Div = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr;
    margin: .3em;
    padding: .3em;
    height: 100%;
`;

const SubHeading = styled.h3`
    color: var(--blue);
    font-family: audiowide;
    padding: .3em;
    margin: .1em;
`;

const Paragraph = styled.p`
    font-family: Exo2;
    padding: .5em 4em .5em .5em;
    margin: .1em;
`;

interface AboutState {
    sectionTitle: string;
    sectionSubtitles: string[];
    sectionText: string[];
}

export default class About extends React.Component<{}, AboutState> {
    constructor(props: string) {
        super(props);
        this.state = {
            sectionTitle: 'About',
            sectionSubtitles: [
                'Foreword',
                'The Developer',
                'The person',
                'Skills'
                ],
            sectionText: [
                'My name is Jose Diaz Gonzalez, and I am a Full Stack Web Developer based in Tenerife, Spain. In 2015, I moved to Bristol, UK. There I found my passion and started learning everything about Web Development In 2017, I moved back to Spain and got a Diploma in Development of Web Applications. I also went through the EOI\'s Full Stack Web Development Bootcamp.',
                'I am truly passionate about the craft of programming and problem-solving, and love all things web. I specialize in the Front-End, ReactJS and NodeJS, but I can dive into Back-End, databases and DevOps easily. I am a JavaScript/TypeScript advocate but I have dabbled with Java SE/EE and PHP in the past.',
                'When I\'m not building websites, going through CodeWars or promoting OSS -I like indie games, cooking, and playing pool. Oh, also I\'m a dog lover and the proud son of Suka, a half a staffy half dalmatian dog.'
            ]
        }
    }
    
    render() {
        const { sectionTitle, sectionSubtitles, sectionText } = this.state;
        return <AboutWrapper>
            <HeadingWrapper>
                <Heading title={sectionTitle} />
            </HeadingWrapper>
            <TextWrapper>
                <Div>
                    <SubHeading>{sectionSubtitles[0]}</SubHeading>
                    <Paragraph>{sectionText[0]}</Paragraph>
                </Div>
                <Div>
                    <SubHeading>{sectionSubtitles[1]}</SubHeading>
                    <Paragraph>{sectionText[1]}</Paragraph>
                </Div>
                <Div>
                    <SubHeading>{sectionSubtitles[2]}</SubHeading>
                    <Paragraph>{sectionText[2]}</Paragraph>
                </Div>
                <Div>
                    <SubHeading>{sectionSubtitles[3]}</SubHeading>

                </Div>
            </TextWrapper>
        </AboutWrapper>
    }
}