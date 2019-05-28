import React from 'react';
import { inject, observer } from 'mobx-react';
import { LandingStore } from '../stores/LandingStore';
import styled from '@emotion/styled';
import { Power2, SteppedEase, TimelineLite, TimelineMax, TweenMax } from 'gsap';
import Particles from 'react-particles-js';
import { generateRandomNumber } from '../utils/utils';
import * as particlesJSON from './../utils/particles.json';

const particlesParams: any = particlesJSON;

const Wrapper = styled.div`
  background: linear-gradient(
    to bottom right,
    var(--black) 50%,
    black
  );
  background-size: cover;
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 3fr 1fr 2fr;
  height: 100vh;
  position: relative;
`;

const StyledParticles = styled(Particles)`
  position: fixed;
  height: 100vh;
  width: 100vw;
`;

const Jumbotron = styled.div`
  align-self: end;
  color: var(--white);
  font-family: Audiowide, monospace;
  font-size: 1.5em;
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: end;
  pointer-events: none;
  margin: 1em;
  padding: 1em;
  @media (max-width: 980px) {
    grid-column: 1/3;
  }
`;

const H4 = styled.h4`
  @media (max-width: 500px) {
    display: none;
  }
`;

export interface LandingProps {
  landingStore?: LandingStore;
}

@inject('landingStore')
@observer
export default class Landing extends React.Component<LandingProps, {}> {
  private jumbotronRef: HTMLDivElement | null;

  constructor(props: LandingProps) {
    super(props);
    this.jumbotronRef = null;
  }

  componentDidMount(): void {
    TweenMax.from(this.jumbotronRef, 2.5, {
      x: () => generateRandomNumber(-1000, 1000),
      y: () => generateRandomNumber(-1000, 1000),
      opacity: 0
    });
  }

  render() {
    const { headingText } = this.props.landingStore!;
    return <Wrapper>
      <StyledParticles params={particlesParams}/>
      <Jumbotron ref={ div => this.jumbotronRef = div }>
        <h1>{ headingText.greeting }</h1>
        <h2>{ headingText.introduction }</h2>
        <h3>{ headingText.job }</h3>
        <H4>{ headingText.description }</H4>
      </Jumbotron>
    </Wrapper>;
  }
}
