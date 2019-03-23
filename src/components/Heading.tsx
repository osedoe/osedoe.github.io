import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
    background: var(--black);
    position: relative;
    margin-top: 4em;
    height: 85px;
    width: 140px;
    z-index: 1;
`;

const BlueBox = styled.span`
    background: var(--black);
    border-bottom: 3px solid var(--blue);
    color: var(--white);
    font-family: Audiowide, monospace;
    position: absolute;
    left: 14%;
    bottom: 30%;
    padding: 1em 1.5em .5em .1em;
    width: 65%;
    z-index: 1;
`;

const WhiteBox = styled.span`
    border: 3px solid var(--white);
    position: absolute;
    bottom: 22%;
    left: 10%;
    height: 60%;
    width: 80%;
    z-index: 2;
`;

const YellowBox = styled.span`
    border: 3px solid var(--yellow);
    position: absolute;
    bottom: 15%;
    left: 4%;
    height: 60%;
    width: 80%;
    z-index: 1;
`;

interface HeadingProps {
    title: string;
}

export const Heading = (props: HeadingProps) => {
    const { title } = props;
    return <Base>
        <WhiteBox />
        <BlueBox>- {title}</BlueBox>
        <YellowBox />
    </Base>;
};
