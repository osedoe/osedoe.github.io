import React from 'react';
import { inject, observer } from 'mobx-react';
import { LandingStore } from '../stores/LandingStore';
import styled from '@emotion/styled';
import { Power2, SteppedEase, TimelineLite, TimelineMax, TweenMax } from 'gsap';

const Wrapper = styled.div`
  background: var(--white);
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 3fr 1fr 2fr;
  height: 100vh;
  position: relative;
`;

const Jumbotron = styled.div`
  align-self: end;
  font-family: Audiowide, monospace;
  font-size: 1.5em;
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: end;
  margin: 1em;
  padding: 1em;
  @media (max-width: 980px) {
    grid-column: 1/3;
  }
`;

const Div = styled.div`
  background: red;
`;

export interface LandingProps {
  landingStore?: LandingStore;
}

function generateRandom(min, max) {
  return Math.random() * (max - min) + min;
}

@inject('landingStore')
@observer
export default class Landing extends React.Component<LandingProps, {}> {
  private jumbotronRef: any;

  constructor(props: LandingProps) {
    super(props);
    this.jumbotronRef = React.createRef();
  }

  componentDidMount(): void {
    TweenMax.from(this.jumbotronRef, 2.5, {
      x: () => generateRandom(-1000, 1000),
      y: () => generateRandom(-1000, 1000),
      opacity: 0
    });
  }

  render() {
    const { headingText } = this.props.landingStore!;
    return <Wrapper>
      <Jumbotron ref={ div => this.jumbotronRef = div }>
        <h1>{ headingText.greeting }</h1>
        <h2>{ headingText.introduction }</h2>
        <h3>{ headingText.job }</h3>
        <h4>{ headingText.description }</h4>
      </Jumbotron>
    </Wrapper>;
  }
}
