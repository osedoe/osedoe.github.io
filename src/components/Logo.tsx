import React from 'react';
import styled from '@emotion/styled';

const LogoWrapper = styled.div`
    background: red;
`;

interface LogoProps{

}

interface LogoState {

}

export default class Logo extends React.Component<LogoProps, LogoState> {
    render() {
        return <LogoWrapper>
            <img src='#' alt='Jose Diaz' />
        </LogoWrapper>
    }
}