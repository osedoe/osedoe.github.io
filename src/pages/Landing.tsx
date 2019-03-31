import React from 'react';
import { inject, observer } from 'mobx-react';
import { LandingStore } from '../stores/LandingStore';
import styled from '@emotion/styled';
import { Power2, SteppedEase, TimelineLite, TimelineMax, TweenMax } from 'gsap';
import { generateRandom } from '../utils';

const Wrapper = styled.div`
  background: var(--black);
  background-size: cover;
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 3fr 1fr 2fr;
  height: 100vh;
  position: relative;
`;

const Jumbotron = styled.div`
  align-self: end;
  color: var(--black);
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

const Dot = styled.span`
  background: var(--black);
  border-radius: 50%;
  position: absolute;
  height: 10px;
  width: 10px;
  top: 50%;
  left: 50%;
  transform: translate(${ generateRandom(0, 100) }, ${ generateRandom(0, 100) });
`;

export interface LandingProps {
  landingStore?: LandingStore;
}

@inject('landingStore')
@observer
export default class Landing extends React.Component<LandingProps, {}> {
  private tween: ReturnType<typeof TweenMax.from> | null;
  private jumbotronRef: HTMLDivElement | null;
  private dot1Ref: any;
  private dot2Ref: any;
  private dot3Ref: any;
  private dot4Ref: any;
  private dot5Ref: any;

  constructor(props: LandingProps) {
    super(props);
    this.tween = new TimelineMax({ repeat: -1 });
    this.jumbotronRef = null;
  }

  componentDidMount(): void {
    TweenMax.from(this.jumbotronRef, 2.5, {
      x: () => generateRandom(-1000, 1000),
      y: () => generateRandom(-1000, 1000),
      opacity: 0
    });
    // this.tween
    //   .to([this.dot1Ref], .1, {
    //   x: () => generateRandom(-1000, 1000),
    //   y: () => generateRandom(-1000, 1000),
    //   opacity: 0
    // })
    //   .to([this.dot2Ref], 5, {
    //   x: () => generateRandom(-1000, 1000),
    //   y: () => generateRandom(-1000, 1000)
    // })
    //   .to([this.dot3Ref], 5, {
    //   x: () => generateRandom(-1000, 1000),
    //   y: () => generateRandom(-1000, 1000)
    // })
    //   .to([this.dot4Ref], 5, {
    //   x: () => generateRandom(-1000, 1000),
    //   y: () => generateRandom(-1000, 1000)
    // })
    //   .to([this.dot5Ref], 5, {
    //   x: () => generateRandom(-1000, 1000),
    //   y: () => generateRandom(-1000, 1000)
    // });

  }

  render() {
    const { headingText } = this.props.landingStore!;
    return <Wrapper>
      {/*<Particle ref={ div => this.dot1Ref = div}/>*/ }
      <Dot ref={ div => this.dot1Ref = div }/>
      <Dot ref={ div => this.dot2Ref = div }/>
      <Dot ref={ div => this.dot3Ref = div }/>
      <Dot ref={ div => this.dot4Ref = div }/>
      <Dot ref={ div => this.dot5Ref = div }/>
      <Jumbotron ref={ div => this.jumbotronRef = div }>
        {/*<h1>{ headingText.greeting }</h1>*/}
        {/*<h2>{ headingText.introduction }</h2>*/}
        {/*<h3>{ headingText.job }</h3>*/}
        {/*<h4>{ headingText.description }</h4>*/}
      </Jumbotron>
    </Wrapper>;
  }
}
