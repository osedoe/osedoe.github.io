import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import './Nav.css';

const NavBurger = styled.div`
  box-sizing: border-box;
  color: var(--white);
  cursor: pointer;
  font-family: Audiowide, monospace;
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  position: absolute;
  right: 0;
  top: 0;
  height: 2em;
  width: 10em;
  z-index: 1;
  @media (max-width: 1000px) {
    font-size: 1em;
    margin: 0;
  }
`;

const NavCopy = styled.span`
  background: transparent;
  color: var(--white);
  font-size: 1.3em;
  margin-right: .5em;
  user-select: none;
  :hover {
    color: transparent;
    background-image: -webkit-linear-gradient(
      right,
      var(--yellow) 33%,
      var(--blue) 50%,
      var(--white)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 4s;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  background: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: column;
  font-family: Audiowide, monospace;
  font-size: 2em;
  height: 100vh;
  justify-content: center;
  list-style: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  & a {
    color: var(--white);
  }
  & a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const MenuItem = styled.li`
  align-items: center;
  cursor: not-allowed;
  display: flex;
  height: 80px;
  justify-content: center;
  margin: .4em;
  width: 160px;
  & > * {
    pointer-events: none;
  }
`;

export const Nav = () => {
  const [display, setDisplay] = useState(false);
  const toggleNav = () => setDisplay(!display);

  return <nav>
    <NavBurger onClick={ toggleNav }>
      <NavCopy>_Menu</NavCopy>
      <span className={ display ? 'burger active' : 'burger' }/>
    </NavBurger>
    <NavMenu className={ display ? 'menu active' : 'menu' }>
      <MenuItem key="Home">
        <Link to="Home" onClick={ toggleNav }>Home</Link>
      </MenuItem>
      <MenuItem key="About">
        <Link to="About" onClick={ toggleNav }>About</Link>
      </MenuItem>
      <MenuItem key="Work">
        <Link to="Work" onClick={ toggleNav }>Work</Link>
      </MenuItem>
      <MenuItem key="Blog">
        <Link to="Blog" onClick={ toggleNav }>Blog</Link>
      </MenuItem>
    </NavMenu>
  </nav>;
};
