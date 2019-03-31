import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { generateRandom } from '../utils';

const Wrapper = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8em;
  position: fixed;
  bottom: 0;
  left: .6em;
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
    color: ${generateRandom(0, 1) >= .5 ? 'var(--blue)' : 'var(--yellow)'};
  }
`;

export const SocialBar = () => {
  return <Wrapper>
    <a href="#"><FontAwesomeIcon icon={ faGithubSquare }/></a>
    <a href="#"><FontAwesomeIcon icon={ faTwitterSquare}/></a>
    <a href="#"><FontAwesomeIcon icon={ faLinkedin }/></a>
  </Wrapper>;
};
