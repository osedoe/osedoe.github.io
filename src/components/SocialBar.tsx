import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { generateRandomNumber } from '../utils/utils';

const Wrapper = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8em;
  position: fixed;
  bottom: 0;
  left: .6em;
  opacity: .85;
  :before {
    content: '';
    height: 201px;
    width: 2px;
    background-color: var(--white);
    margin-bottom: 12px;
    margin-right: 2px;
    border-radius: 2px;
  }
  :after {
    content: "";
    height: 121px;
    width: 2px;
    background-color: var(--white);
    margin-top: 12px;
    margin-right: 2px;
    border-radius: 2px;
  }
  & a:hover {
    color: ${generateRandomNumber(0, 1) >= .5 ? 'var(--blue)' : 'var(--yellow)'};
    transform: rotate(360deg) scale(1.2);
    transition: all 400ms;
    opacity: 1;
  }
`;

export const SocialBar = () => {
  return <Wrapper>
    <a href="https://github.com/osedoe"><FontAwesomeIcon icon={ faGithubSquare }/></a>
    <a href="https://twitter.com/Osedoe?lang=en"><FontAwesomeIcon icon={ faTwitterSquare}/></a>
    <a href="https://linkedin.com/in/jose-diaz-gonzalez-696067107"><FontAwesomeIcon icon={ faLinkedin }/></a>
  </Wrapper>;
};
