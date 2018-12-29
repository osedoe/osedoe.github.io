import React from 'react';
// import styled from 'react-emotion';
import Logo from './../components/Logo';
import Nav from './../components/Nav';
import ArrowDown from './../components/ArrowDown';

interface LandingProps {
}
interface LandingState {
    heading: string;
}

export default class Landing extends React.Component<LandingProps, LandingState> {
    constructor(props: string) {
        super(props);
        this.state = {
            heading: 'I\'m Jose. A Full Stack Developer from the Canary Islands'
        }
    }
    
    render() {
        return <div>
            <Logo />
            <Nav />
            {this.state.heading}
            <ArrowDown />
        </div>
    }
}