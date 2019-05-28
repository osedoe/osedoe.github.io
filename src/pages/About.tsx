import React from 'react';
import styled from '@emotion/styled';
import { Heading } from '../components/Heading';
import { inject, observer } from 'mobx-react';
import { AboutStore } from '../stores/AboutStore';
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

export interface AboutProps {
  aboutStore?: AboutStore;
}

@inject('aboutStore')
@observer
export default class About extends React.Component<AboutProps, {}> {
  render() {
    const { sectionTitle, sectionSubtitles, sectionTexts, sectionSkills } = this.props.aboutStore!;
    return <Section>
      <HeadingWrapper>
        <Heading title={ sectionTitle }/>
      </HeadingWrapper>
      <TextWrapper>
        <AboutText subtitle={ sectionSubtitles[0] } text={ sectionTexts[0] }/>
        <AboutText subtitle={ sectionSubtitles[1] } text={ sectionTexts[1] }/>
        <AboutText subtitle={ sectionSubtitles[2] } text={ sectionTexts[2] }/>
        <TableWrapper>
          <SubHeading>{ sectionSubtitles[3] }</SubHeading>
          <AboutTable elements={ sectionSkills }/>
        </TableWrapper>
      </TextWrapper>
      <AboutAvatar/>
    </Section>;
  }
}
