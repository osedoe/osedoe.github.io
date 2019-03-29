import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: .6em;
  align-items: center;
  opacity: 0.8;
  position: fixed;
  bottom: 0;
  :before {
    content: '';
    height: 201px;
    width: 2px;
    background-color: var(--black);
    margin-bottom: 12px;
    margin-right: 2px;
    border-radius: 2px;
  }
  :after {
    content: "";
    height: 121px;
    width: 2px;
    background-color: var(--black);
    margin-top: 12px;
    margin-right: 2px;
    border-radius: 2px;
  }
`;

export const SocialBar = () => {
  return <Wrapper>
    social
  </Wrapper>;
};
