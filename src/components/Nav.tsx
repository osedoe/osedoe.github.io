import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { NavStore } from '../stores/NavStore';
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

interface NavProps {
    navStore?: NavStore;
}

@inject('navStore')
@observer
export default class Nav extends React.Component<NavProps, {}> {
    render() {
        const { navTitle, navigation, display, toggleNav } = this.props.navStore!;
        return <nav>
            <NavBurger onClick={toggleNav}>
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