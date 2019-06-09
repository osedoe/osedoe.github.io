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
  min-height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  justify-content: center;
  padding: 32px;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HeadingWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  justify-self: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin: 4px;
  max-width: 600px;
`;

const SubHeading = styled.h3`
    color: var(--blue);
    font-family: Audiowide, monospace;
    margin: 0 1px;
    padding: 4px;
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 4px;
    padding: 4px;
`;

const sectionTexts: string[] = [
  // tslint:disable-next-line:max-line-length
  `My name is Jose Diaz-Gonzalez, although some people know me as Ose. I am a Full Stack Web Developer based in Tenerife, Spain. In 2015, I moved to Bristol, UK. There I found my passion and started learning everything about Web Development. In 2017, I moved back to Spain and got a Diploma in Development of Web Applications, while I was also enrolled in the EOI's Full Stack Web Development Bootcamp.`,
  // tslint:disable-next-line:max-line-length
  `I am truly passionate about the craft of programming and problem-solving, and love all things web. I specialize in the Front-End, ReactJS and NodeJS, but I can dive into Back-End, databases and DevOps easily. I am a JavaScript/TypeScript advocate but I have dabbled with Java SE/EE and PHP in the past. Currently, I'm working from home at Nologis.`,
  // tslint:disable-next-line:max-line-length
  `When I'm not building websites, going through CodeWars or promoting OSS -I like playing indie games, cooking, and playing pool with a pint of beer. Oh, also I\'m a dog lover and the proud father of Suka, a half a staffy half dalmatian dog.`
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
