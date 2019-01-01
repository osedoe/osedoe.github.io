import React from 'react';
import styled from '@emotion/styled';

const LogoWrapper = styled.div`
    background: rgb(29, 32, 41);
    color: white;
    display: grid;
    height: 60px;
    width: 120px;
`;

const LogoImg = styled.img`
    place-self: center;
`;

export default class Logo extends React.Component<{},{}> {
    render() {
        return <LogoWrapper>
            <LogoImg src='#' alt='JD' />
        </LogoWrapper>
    }
}