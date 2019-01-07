import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr;
    margin: .3em;
    padding: .3em;
    height: 100%;
`;

const SubHeading = styled.h3`
    color: var(--blue);
    font-family: audiowide;
    padding: .3em;
    margin: .1em;
`;

const Paragraph = styled.p`
    font-family: 'Exo 2';
    padding: .5em 2em .5em .5em;
    margin: .1em;
    text-align: justify;
`;

interface AboutTextProps {
    subtitle: string;
    text: string;
}

export default class AboutText extends React.Component<AboutTextProps> {
    render() {
        const { subtitle, text } = this.props;
        return <Div>
        <SubHeading>{subtitle}</SubHeading>
        <Paragraph>{text}</Paragraph>
        </Div>
    }
}