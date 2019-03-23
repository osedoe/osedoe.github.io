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
    height: 5em;
    width: 10em;
    z-index: 1;
`;

const NavCopy = styled.span`
    font-size: 1.3em;
`;

const NavMenu = styled.div`
    align-items: center;
    background: var(--black);
    color: white;
    display: flex;
    flex-direction: column;
    font-family: Audiowide;
    font-size: 2em;
    height: 100vh;
    justify-content: center;
    list-style: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
`;

const MenuItem = styled.li`
    align-items: center;
    display: flex;
    height: 80px;
    justify-content: center;
    margin: .4em;
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
                <NavCopy>{navTitle}</NavCopy>
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
