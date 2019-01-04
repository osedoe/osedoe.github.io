import React from 'react';
import Logo from './../components/Logo';
import Nav from './../components/Nav';
import ArrowDown from './../components/ArrowDown';
import './Landing.css';
// import styled from '@emotion/styled';

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
        return <div className={'landingWrapper'}>
            <div className={'jumbotron'}>
                <h1>{heading1}</h1>
                <h2>{heading2}</h2>
                <h2>{heading3}</h2>
            </div>
        </div>
    }
}