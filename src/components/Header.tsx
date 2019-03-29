import React from 'react';
import styled from '@emotion/styled';
import { Logo } from './Logo';
import Nav from './Nav';
import { SocialBar } from './SocialBar';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  z-index: 4;
`;

export const Header = () =>
  <HeaderWrapper>
    <Logo/>
    <Nav/>
    <SocialBar/>
  </HeaderWrapper>;
