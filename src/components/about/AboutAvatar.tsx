import React from 'react';
import styled from '@emotion/styled';

const AvatarWrapper = styled.div`
    padding-top: 36px;
    place-self: center;
`;

const DivFrame = styled.div`
    position: relative;
`;

const ProfileFrame = styled.div`
    position: relative;
    z-index: 2;
    max-width: 280px;
    &:before {
        background: var(--blue);
        border: 3px solid white;
        content: '';
        height: 110%;
        left: -11%;
        position: absolute;
        top: -6%;
        transform: rotate(6deg);
        transition: all ease-in-out .4s;
        width: 121%;
        z-index: -1;
    }

    & img {
        border: 3px solid white;
        height: 100%;
        width: 100%;
    }

    :hover {
      :before {
        transform: rotate(-6deg);
      }
    }
    
    @media (max-width: 520px) {
      max-width: 200px;
    }
`;

const SukaFrame = styled.div`
    left: 2px;
    position: relative;
    top: -80px;
    transform: rotate(-10deg);
    z-index: 2;
    height: 150px;
    width: 150px;
    &:before {
      background: var(--yellow);
      border: 3px solid var(--white);
      content: '';
      height: 121%;
      left: -14px;
      position: absolute;
      top: -12%;
      transform: rotate(-6deg);
      transition: all ease-in-out .4s;
      width: 121%;
      z-index: -1;
    }
    :hover {
      :before {
        transform: rotate(6deg);
      }
    }

    & img {
      border: 3px solid var(--white);
      height: 100%;
      width: 100%;
    }

    @media (max-width: 520px) {
      height: 100px;
      width: 100px;
    }
`;

const Resume = styled.div`
    display: flex;
    width: 100%;
    & p {
        border: 3px solid var(--white);
        font-family: Audiowide, monospace;
        padding: 8px;
    }
`;

export const AboutAvatar = () => {
  return <AvatarWrapper>
    <DivFrame>
      <ProfileFrame>
        <img src="/profile1.png" alt="Profile"/>
      </ProfileFrame>
      <SukaFrame>
        <img src="/suka1.jpg" alt="Suka"/>
      </SukaFrame>
    </DivFrame>
    {/*<Resume>*/}
      {/*<p>My Resume</p>*/}
    {/*</Resume>*/}
  </AvatarWrapper>;
};
