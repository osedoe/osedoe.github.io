import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4px;
    padding: 4px;
`;

const SubHeading = styled.h3`
    color: var(--blue);
    font-family: audiowide, monospace;
    margin: 0;
    padding: 4px;
`;

const Paragraph = styled.p`
    display: flex;
    font-family: 'Exo 2', monospace;
    margin: 0;
    padding: 4px 32px 4px 4px;
    text-align: justify;
`;

interface AboutTextProps {
    subtitle: string;
    text: string;
}

export const AboutText = (props: AboutTextProps) => {
    const { subtitle, text } = props;
    return <
        Container>
        <SubHeading>{subtitle}</SubHeading>
        <Paragraph>{text}</Paragraph>
    </Container>;
};
