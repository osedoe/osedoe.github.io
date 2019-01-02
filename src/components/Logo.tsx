import React from 'react';
import styled from '@emotion/styled';

const LogoWrapper = styled.div`
    background: rgb(29, 32, 41);
    border: 4px solid white;
    color: white;
    display: grid;
    font-family: Audiowide;
    height: 60px;
    text-align: center;
    width: 120px;
`;

const Span1 = styled.span`
    color: rgb(0, 135, 255);
`;

const Span2 = styled.span`
    color: rgb(249, 205, 70);
`;

export default class Logo extends React.Component<{},{}> {
    render() {
        return <LogoWrapper>
            <p>J<Span1>ose</Span1> D<Span2>iaz</Span2></p>
        </LogoWrapper>
    }
}