import React from 'react';
import Logo from './../components/Logo';
import Nav from './../components/Nav';
import ArrowDown from './../components/ArrowDown';
import styled from '@emotion/styled';

const LandingWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    grid-template-rows: 3fr 1fr 2fr;
    height: 100vh;
`;

const Jumbotron = styled.div`
    font-family: audiowide;
    grid-row: 2/3;
    grid-column: 3/4;
    align-self: end;
    justify-self: end;
    margin: 1em 4em 1em 1em;
    padding: 1em;
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
        const { heading1, heading2, heading3 } = this.state;
        return <LandingWrapper>
            <Jumbotron>
                <h1>{heading1}</h1>
                <h2>{heading2}</h2>
                <h2>{heading3}</h2>
            </Jumbotron>
        </LandingWrapper>
    }
}