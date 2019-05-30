import React from 'react';
import styled from '@emotion/styled';
import { Power2, SteppedEase, TimelineLite, TimelineMax, TweenMax } from 'gsap';
import Particles from 'react-particles-js';
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
  margin: 1em;
  padding: 1em;
  pointer-events: none;
  user-select: none;
  @media (max-width: 980px) {
    grid-column: 1/3;
  }
`;

const H4 = styled.h4`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Landing = () => {
  // TweenMax.from(this.jumbotronRef, 2.5, {
  //   x: () => generateRandomNumber(-1000, 1000),
  //   y: () => generateRandomNumber(-1000, 1000),
  //   opacity: 0
  // });

  return <Wrapper>
    <StyledParticles params={ particlesParams }/>
    {/*<Jumbotron ref={ div => this.jumbotronRef = div }>*/ }
    <Jumbotron>
      <h1>Hola.</h1>
      <h2>I'm Jose Diaz</h2>
      <h3>Full Stack Developer | Nologis</h3>
      <H4>Specialized in JavaScript, TypeScript, ReactJS and NodeJS.</H4>
    </Jumbotron>
  </Wrapper>;
};
