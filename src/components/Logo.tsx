import React from 'react';
import styled from '@emotion/styled';

const LogoWrapper = styled.div`
    align-items: center;
    background: transparent;
    box-sizing: border-box;
    color: var(--white);
    font-family: Audiowide, monospace;
    font-size: 1.3em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin: 1em;
    height: 5em;
    width: 10em;
    @media (max-width: 1000px) {
      font-size: 1em;
      margin: 0;
    }
`;

const WhiteText = styled.p`
    font-size: 1.3em;
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
