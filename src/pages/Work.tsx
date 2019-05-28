import React from 'react';
import styled from '@emotion/styled';
import { Heading } from '../components/Heading';
import { inject, observer } from 'mobx-react';
import { WorkStore } from '../stores/WorkStore';

const Section = styled.section`
  background: linear-gradient(
    to bottom right,
    var(--black) 50%,
    black
  );
  color: var(--white);
  display: grid;
  font-family: Audiowide, monospace;
  grid-gap: 1em;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;
  padding: 2em;
`;

const HeadingWrapper = styled.div`
  grid-area: 1/2/2/4;
  justify-self: center;
`;

const SubtitleWrapper = styled.div`
  grid-area: 2/2/3/4;
  justify-self: center;
`;

const Subtitle = styled.p`
  color: var(--yellow);
  font-size: 1.2em;
`;

interface WorkProps {
  workStore?: WorkStore;
}

interface WorkState {

}

@inject('workStore')
@observer
export default class Work extends React.Component<WorkProps, WorkState> {
  render() {
    const { sectionTitle, sectionSubtitle } = this.props.workStore!;
    return <Section>
      <HeadingWrapper>
        <Heading title={ sectionTitle }/>
      </HeadingWrapper>
      <SubtitleWrapper>
        <Subtitle>{sectionSubtitle}</Subtitle>

      </SubtitleWrapper>
    </Section
    >;
  }
}
