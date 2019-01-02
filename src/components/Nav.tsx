import React from 'react';
import styled from '@emotion/styled';

const NavWrapper = styled.div`
`;

const NavBurger = styled.div`
    background: black;
    border: 3px solid black;
    color: white;
    font-family: Audiowide;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 120px;
`;

const NavMenu = styled.div`
    display: none;
    position: absolute;
`;

interface NavState {
    navTitle: string;
    display: boolean;
    navigation: string[];
}

export default class Nav extends React.Component<{}, NavState> {
    constructor(props: string) {
        super(props);
        this.state = {
            navTitle: 'Menu',
            display: false,
            navigation: [
                'home',
                'about',
                'work',
                'blog'
            ]
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        const currentState = this.state.display;
        this.setState({ display: !currentState });
    }

    render() {
        const { navTitle, navigation } = this.state;
        return <NavWrapper onClick={this.toggleNav}>
            <NavBurger>
                {navTitle}
            </NavBurger>
            <NavMenu>
                {navigation.map(li => `${li}  `)}
            </NavMenu>
        </NavWrapper>
    }
}