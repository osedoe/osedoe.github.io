import React from 'react';
import styled from '@emotion/styled';
import { Heading } from '../components/Heading';
import { AboutText } from '../components/about/AboutText';
import { AboutTable } from '../components/about/AboutTable';
import { AboutAvatar } from '../components/about/AboutAvatar';

const Section = styled.section`
    background: linear-gradient(
    to bottom right,
    var(--black) 50%,
    black
  );
    box-sizing: border-box;
    color: var(--white);
    display: grid;
    height: 100vh;
    grid-template-columns: 4fr 3fr;
    grid-gap: 1em;
    justify-content: center;
    padding: 2em;
`;

const HeadingWrapper = styled.div`
    grid-column: 1/3;
    grid-row: 1/2;
    justify-self: center;
`;

const TextWrapper = styled.div`
    margin: .3em 1.5em;
`;

const SubHeading = styled.h3`
    color: var(--blue);
    font-family: Audiowide, monospace;
    margin: 0 .1em;
    padding: .3em;
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 .3em;
    padding: .3em;
`;

const sectionTexts: string[] = [
  // tslint:disable-next-line:max-line-length
  `My name is Jose Diaz Gonzalez, and I am a Full Stack Web Developer based in Tenerife, Spain. In 2015, I moved to Bristol, UK. There I found my passion and started learning everything about Web Development In 2017, I moved back to Spain and got a Diploma in Development of Web Applications. I also went through the EOI's Full Stack Web Development Bootcamp.`,
  // tslint:disable-next-line:max-line-length
  `I am truly passionate about the craft of programming and problem-solving, and love all things web. I specialize in the Front-End, ReactJS and NodeJS, but I can dive into Back-End, databases and DevOps easily. I am a JavaScript/TypeScript advocate but I have dabbled with Java SE/EE and PHP in the past.`,
  // tslint:disable-next-line:max-line-length
  `When I'm not building websites, going through CodeWars or promoting OSS -I like indie games, cooking, and playing pool. Oh, also I\'m a dog lover and the proud son of Suka, a half a staffy half dalmatian dog.`
];

const sectionSkills: string[][] = [
  ['HTML/CSS', 'JavaScript', 'TypeScript'],
  ['ReactJS', 'NodeJS', 'Java SE/EE'],
  ['SASS/SCSS', 'MySQL', 'Git'],
  ['Docker']
];

export const About = () => {
  return <Section>
    <HeadingWrapper>
      <Heading title="About"/>
    </HeadingWrapper>
    <TextWrapper>
      <AboutText subtitle="Foreword" text={ sectionTexts[0] }/>
      <AboutText subtitle="The Developer" text={ sectionTexts[1] }/>
      <AboutText subtitle="The Person" text={ sectionTexts[2] }/>
      <TableWrapper>
        <SubHeading>Skills</SubHeading>
        <AboutTable elements={ sectionSkills }/>
      </TableWrapper>
    </TextWrapper>
    <AboutAvatar/>
  </Section>;
};
