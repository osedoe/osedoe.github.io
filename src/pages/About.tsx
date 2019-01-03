import React from 'react';
import Heading from './../components/Heading';
import styled from '@emotion/styled';

const AboutWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

interface AboutProps {

}

interface AboutState {
    sectionTitle: string;
}

export default class About extends React.Component<AboutProps, AboutState> {
    constructor(props: string) {
        super(props);
        this.state = {
            sectionTitle: 'About'
        }
    }
    
    render() {
        const { sectionTitle } = this.state;
        return <AboutWrapper>
            <Heading title={sectionTitle} />
            <p> Hola </p>
        </AboutWrapper>
    }
}