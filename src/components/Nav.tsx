import React from 'react';
import styled from '@emotion/styled';

const NavWrapper = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
    align-self: end;
`;

const NavBurger = styled.div`
    
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