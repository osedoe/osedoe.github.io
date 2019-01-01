import React from 'react';
import Logo from './../components/Logo';
import Nav from './../components/Nav';
import ArrowDown from './../components/ArrowDown';
import styled from '@emotion/styled';

const LandingWrapper = styled.div`
    display: grid;
    grid-template-columns: 120px 1fr 120px;
    grid-template-rows: 60px 1fr 300px;
    height: 100vh;
`;

const Jumbotron = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
    align-self: end;
    justify-self: end;
`;

interface LandingState {
    heading: string;
}

export default class Landing extends React.Component<{}, LandingState> {
    constructor(props: string) {
        super(props);
        this.state = {
            heading: 'I\'m Jose. A Full Stack Developer from the Canary Islands'
        }
    }
    render() {
        return <LandingWrapper>
            <Logo />
            <Nav />
            <Jumbotron>
                {this.state.heading}
            </Jumbotron>
            <ArrowDown />
        </LandingWrapper>
    }
}