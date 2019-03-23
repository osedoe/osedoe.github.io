import React from 'react';
import styled from '@emotion/styled';

const LogoWrapper = styled.div`
    align-items: center;
    background: var(--black);
    border: 3px solid white;
    color: white;
    display: flex;
    flex-direction: row;
    font-family: Audiowide, monospace;
    height: 5em;
    justify-content: center;
    text-align: center;
    width: 10em;
`;

const LogoCopy = styled.p`
    font-size: 1.3em;
`;

const Span1 = styled.span`
    color: var(--blue);
`;

const Span2 = styled.span`
    color: var(--yellow);
`;

export const Logo = () =>
  <LogoWrapper>
    <LogoCopy>J<Span1>ose</Span1> D<Span2>iaz</Span2></LogoCopy>
  </LogoWrapper>;
