import React from 'react';
import styled from '@emotion/styled';

const LogoWrapper = styled.div`
    align-items: center;
    box-sizing: border-box;
    color: var(--white);
    font-family: Audiowide, monospace;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin: 16px;
    pointer-events: none;
    height: 32px;
    width: 160px;
    @media (max-width: 1000px) {
      font-size: 16px;
      margin: 0;
    }
`;

const WhiteText = styled.p`
    font-size: 20px;
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
