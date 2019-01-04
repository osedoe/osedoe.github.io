import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from '@emotion/styled';
import './Nav.css';

const NavBurger = styled.div`
    background: var(--black);
    border: 3px solid var(--white);
    color: white;
    font-family: Audiowide;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    height: 60px;
    width: 120px;
    z-index: 1;
`;

const NavMenu = styled.div`
    background: var(--black);
    color: white;
    font-family: Audiowide;
    font-size: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    list-style: none;
    height: 100vh;
    width: 0;
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
        const { navTitle, navigation, display } = this.state;
        return <nav>
            <NavBurger onClick={this.toggleNav}>
                {navTitle}
                <div className={display ? 'burger active' : 'burger'}></div>
            </NavBurger>
            <NavMenu className={display ? 'menu active' : 'menu'}>
                {navigation.map(item => {
                    return <MenuItem key={item}>
                        <Link to={item}>
                            {item}
                        </Link>
                    </MenuItem>
                })}
            </NavMenu>
        </nav>
    }
}