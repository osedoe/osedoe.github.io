import React from 'react';
import { inject, observer } from 'mobx-react';
import { LandingStore } from '../stores/LandingStore';
import styled from '@emotion/styled';
import { Power2, TimelineLite, TweenMax } from 'gsap';

const Wrapper = styled.div`
  background: var(--white);
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  grid-template-rows: 3fr 1fr 2fr;
  height: 100vh;
`;

const Jumbotron = styled.div`
  align-self: end;
  font-family: Audiowide, monospace;
  grid-column: 3/4;
  grid-row: 2/3;
  justify-self: end;
  margin: 1em 4em 1em 1em;
  padding: 1em;
  @media (max-width: 600px) {
    grid-column: 1/4;
  }
`;

const Div = styled.div`
  background: red;
`;

export interface LandingProps {
  landingStore?: LandingStore;
}

@inject('landingStore')
@observer
export default class Landing extends React.Component<LandingProps, {}> {
  private myElement: any;
  private myTween: any;
  constructor(props: LandingProps) {
    super(props);
    this.myElement = React.createRef();
    this.myTween = null;
  }

  componentDidMount(): void {
    this.myTween = TweenMax.from(this.myElement, 2.5, {x: 900, y: 0});
  }

  render() {
    const {heading1, heading2, heading3} = this.props.landingStore!;
    return <Wrapper>
      {/*<Div ref={div => this.myElement = div}/>*/}
      <Jumbotron ref={div => this.myElement = div}>
        <h1>{heading1}</h1>
        <h2>{heading2}</h2>
        <h2>{heading3}</h2>
      </Jumbotron>
    </Wrapper>;
  }
}
