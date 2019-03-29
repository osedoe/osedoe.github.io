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
    <LogoCopy>_<Span1>Jose</Span1> <Span2>Diaz</Span2></LogoCopy>
  </LogoWrapper>;
