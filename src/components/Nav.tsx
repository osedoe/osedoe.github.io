import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import './Nav.css';

const NavBurger = styled.div`
  box-sizing: border-box;
  color: var(--white);
  cursor: pointer;
  font-family: Audiowide, monospace;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  position: absolute;
  right: 0;
  top: 0;
  height: 32px;
  width: 160px;
  z-index: 1;
  @media (max-width: 1000px) {
    font-size: 16px;
    margin: 0;
  }
`;

const NavCopy = styled.span`
  background: transparent;
  color: var(--white);
  font-size: 20px;
  margin-right: 8px;
  user-select: none;
  transition: all .4s;
  position: relative;
  :after {
    content: '';
    position: absolute;
    background: transparent;
    bottom: -2.5px;
    left: -2.5px;
    height: 110%;
    width: 110%;
    transition: all 600ms;
    z-index: -1;
    }
  :hover {
    :after {
      content: '';
      position: absolute;
      border-top: 3px solid var(--blue);
      border-left: 3px solid var(--blue);
      border-right: 3px solid var(--yellow);
      border-bottom: 3px solid var(--yellow);
      bottom: -2.5px;
      left: -6.5px;
      height: 110%;
      width: 110%;
      transform: rotate(-5deg);
      z-index: -1;
    }
  }
`;

const NavMenu = styled.div`
  align-items: center;
  background: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: column;
  font-family: Audiowide, monospace;
  font-size: 32px;
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
  display: flex;
  height: 80px;
  justify-content: center;
  margin: 6px;
  user-select: none;
  width: 160px;
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  transition: all .8s;
  user-select: none;
  :after {
    background: var(--yellow);
    border-radius: 1px;
    content: '';
    height: 0;
    left: -5%;
    position: absolute;
    top: 60%;
    transition: all 600ms;
    width: 110%;
    z-index: -1;
  }
  &:hover {
    text-decoration: underline;
    transform: scale(1.2);
    :after {
      height: 40%;
    }
  }
  &:focus {
    :after {
      background: var(--white);
      height: 1px;
      width: 10000px;
      left: -5000px;
    }
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
        <StyledLink to="Home" onClick={ toggleNav }>Home</StyledLink>
      </MenuItem>
      <MenuItem key="About">
        <StyledLink to="About" onClick={ toggleNav }>About</StyledLink>
      </MenuItem>
      <MenuItem key="Work">
        <StyledLink to="Work" onClick={ toggleNav }>Work</StyledLink>
      </MenuItem>
      <MenuItem key="Blog">
        <StyledLink to="Blog" onClick={ toggleNav }>Blog</StyledLink>
      </MenuItem>
    </NavMenu>
  </nav>;
};
