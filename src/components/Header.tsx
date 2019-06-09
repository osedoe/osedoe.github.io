import React from 'react';
import styled from '@emotion/styled';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { SocialBar } from './SocialBar';

const HeaderWrapper = styled.div`
  background: transparent;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 4;
`;

export const Header = () =>
  <HeaderWrapper>
    <Logo/>
    <Nav/>
    <SocialBar/>
  </HeaderWrapper>;
