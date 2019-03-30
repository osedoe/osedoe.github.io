import React from 'react';
import styled from '@emotion/styled';

const LogoWrapper = styled.div`
    align-items: center;
    background: transparent;
    //border: 3px solid var(--white);
    //box-shadow: 0 0 8px var(--black);
    color: white;
    font-family: Audiowide, monospace;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin: 2em;
    height: 5em;
    width: 10em;
`;

const WhiteText = styled.p`
    font-size: 1.3em;
    text-shadow: 1px 1px 1px var(--black);
`;

const SpanBlue = styled.span`
    color: var(--blue);
`;

const SpanYellow = styled.span`
    color: var(--yellow);
`;

export const Logo = () =>
  <LogoWrapper>
    <WhiteText>_<SpanBlue>Jose</SpanBlue>_<SpanYellow>Diaz</SpanYellow></WhiteText>
  </LogoWrapper>;
