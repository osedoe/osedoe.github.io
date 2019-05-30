import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr;
    margin: 4px;
    padding: 4px;
    height: 100%;
`;

const SubHeading = styled.h3`
    color: var(--blue);
    font-family: audiowide, monospace;
    padding: 4px;
    margin: 1px;
`;

const Paragraph = styled.p`
    font-family: 'Exo 2', monospace;
    padding: 8px 32px 8px 8px;
    margin: 1px;
    text-align: justify;
`;

interface AboutTextProps {
    subtitle: string;
    text: string;
}

export const AboutText = (props: AboutTextProps) => {
    const { subtitle, text } = props;
    return <Div>
        <SubHeading>{subtitle}</SubHeading>
        <Paragraph>{text}</Paragraph>
    </Div>;
};
