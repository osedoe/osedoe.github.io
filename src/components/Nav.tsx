import React from 'react';
import styled from '@emotion/styled';

const NavBurger = styled.div`
    background: rgb(29, 32, 41);
    border: 3px solid rgb(29, 32, 41);
    color: white;
    font-family: Audiowide;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 120px;
`;

const NavMenu = styled.div`
    background: rgb(29, 32, 41);
    color: white;
    font-family: Audiowide;
    font-size: 2em;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    list-style: none;
    height: 100vh;
    width: 30vw;
`;

const MenuItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .4em;
    height: 80px;
    width: 160px;
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
        return <nav onClick={this.toggleNav}>
            <NavBurger>
                {navTitle}
            </NavBurger>
            <NavMenu>
                {navigation.map(item => <MenuItem key={item}>{item}</MenuItem>)}
            </NavMenu>
        </nav>
    }
}