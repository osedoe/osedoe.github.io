import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8em;
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
    <FontAwesomeIcon icon={ faGithubSquare }/>
    <FontAwesomeIcon icon={ faTwitterSquare}/>
    <FontAwesomeIcon icon={ faLinkedin }/>
  </Wrapper>;
};
