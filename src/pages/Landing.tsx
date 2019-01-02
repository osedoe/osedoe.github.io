import React from 'react';
import Logo from './../components/Logo';
import Nav from './../components/Nav';
import ArrowDown from './../components/ArrowDown';
import styled from '@emotion/styled';

const LandingWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    grid-template-rows: 3fr 1fr;
    height: 100vh;
`;

const Jumbotron = styled.div`
    font-family: audiowide;
    grid-row: 2/3;
    grid-column: 3/4;
    align-self: end;
    justify-self: end;
    margin: 2em;
`;

interface LandingState {
    heading1: string;
    heading2: string;
    heading3: string;
}

export default class Landing extends React.Component<{}, LandingState> {
    constructor(props: string) {
        super(props);
        this.state = {
            heading1: 'Hola.',
            heading2: `I'm Jose`,
            heading3: `A Full Stack Developer from the Canary Islands`
        }
    }
    render() {
        return <LandingWrapper>
            <Jumbotron>
                <h1>{this.state.heading1}</h1>
                <h2>{this.state.heading2}</h2>
                <h2>{this.state.heading3}</h2>
            </Jumbotron>
            <ArrowDown />
        </LandingWrapper>
    }
}