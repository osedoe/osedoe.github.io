import React from 'react';
import styled from '@emotion/styled';
import Particles from 'react-particles-js';
import * as particlesJSON from './../utils/particles.json';
import { keyframes } from '@emotion/core';

const particlesParams: any = particlesJSON;

const randomFadeIn = keyframes`
  from {
    opacity: 0;
  }
  95% {
  }
  to {
    opacity: 1;
  }
`;

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

const H1 = styled.h1`
  animation: ${ randomFadeIn } ease-in-out 2500ms;
`;

const H2 = styled.h2`
  animation: ${ randomFadeIn } ease-in-out 2500ms;
`;

const H3 = styled.h3`
  animation: ${ randomFadeIn } ease-in-out 2500ms;
`;

const H4 = styled.h4`
  animation: ${ randomFadeIn } ease-in-out 2500ms;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Landing = () => {
  console.log(typeof randomFadeIn);
  return <Wrapper>
    <StyledParticles params={ particlesParams }/>
    <Jumbotron>
      <H1>Hola.</H1>
      <H2>I'm Jose Diaz</H2>
      <H3>Full Stack Developer | Nologis</H3>
      <H4>Specialized in JavaScript, TypeScript, ReactJS and NodeJS.</H4>
    </Jumbotron>
  </Wrapper>;
};
