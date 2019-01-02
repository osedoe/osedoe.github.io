import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';
import Nav from './Nav';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
`;

export default class Header extends React.Component {
    render() {
        return <HeaderWrapper>
            <Logo />
            <Nav />
        </HeaderWrapper>
    }
}