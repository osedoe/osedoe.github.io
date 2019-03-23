import React from 'react';
import { inject, observer } from 'mobx-react';
import { LandingStore } from '../stores/LandingStore';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background: var(--white);
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  grid-template-rows: 3fr 1fr 2fr;
  height: 100vh;
`;

const Jumbotron = styled.div`
  font-family: Audiowide, monospace;
  grid-row: 2/3;
  grid-column: 3/4;
  align-self: end;
  justify-self: end;
  margin: 1em 4em 1em 1em;
  padding: 1em;
  @media (max-width: 600px) {
    grid-column: 1/4;
  }
`;

export interface LandingProps {
  landingStore?: LandingStore;
}

@inject('landingStore')
@observer
export default class Landing extends React.Component<LandingProps, {}> {
  render() {
    const {heading1, heading2, heading3} = this.props.landingStore!;
    return <Wrapper>
      <Jumbotron>
        <h1>{heading1}</h1>
        <h2>{heading2}</h2>
        <h2>{heading3}</h2>
      </Jumbotron>
    </Wrapper>;
  }
}
