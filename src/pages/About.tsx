import React from 'react';
// import styled from 'react-emotion';
import Heading from './../components/Heading';

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
        return <div>
            <Heading title={sectionTitle} />
        </div>
    }
}