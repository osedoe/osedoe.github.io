import React from 'react';
import { inject, observer } from 'mobx-react';
import { LandingStore } from '../stores/LandingStore';
import styled from '@emotion/styled';
import { Power2, SteppedEase, TimelineLite, TimelineMax, TweenMax } from 'gsap';
import Particles from 'react-particles-js';
import { generateRandomNumber } from '../utils';

const particlesParams: any = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#F5F5F5'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0.5,
        color: '#F5F5F5'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#F5F5F5',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  }
};

const Wrapper = styled.div`
  background: var(--black);
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
  // private tween: ReturnType<typeof TweenMax.from> | null;
  private jumbotronRef: HTMLDivElement | null;

  constructor(props: LandingProps) {
    super(props);
    // this.tween = new TimelineMax({ repeat: -1 });
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
