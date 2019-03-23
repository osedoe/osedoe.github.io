import React from 'react';
import styled from '@emotion/styled';

const AvatarWrapper = styled.div`
    place-self: center;
`;

const DivFrame = styled.div`
    position: relative;
`;

const ProfileFrame = styled.div`
    position: relative;
    z-index: 2;
    &:before {
        background: var(--blue);
        border: 3px solid white;
        content: '';
        position: absolute;
        top: -6%;
        left: -11%;
        transform: rotate(6deg);
        height: 110%;
        width: 121%;
        z-index: -1;
    }

    & img {
        border: 3px solid white;
        height: 400px;
        width: 280px;
    }
`;

const SukaFrame = styled.div`
    position: relative;
    z-index: 2;
    &:before {
        background: var(--yellow);
        border: 3px solid var(--white);
        content: '';
        position: absolute;
        top: -8%;
        left: -5%;
        transform: rotate(6deg);
        height: 110%;
        width: 65%;
        z-index: -1;
    }

    & img {
        border: 3px solid var(--white);
        height: 150px;
        width: 150px;
    }
`;

const Resume = styled.div`
    display: flex;
    margin-top: 4em;
    width: 100%;
    & p {
        border: 3px solid var(--white);
        font-family: Audiowide;
        padding: .5em;
    }
`;

export const AboutAvatar = () => {
    return <AvatarWrapper>
        <DivFrame>
            <ProfileFrame>
                <img src="/profile1.png" alt="Profile" />
            </ProfileFrame>
            <SukaFrame>
                <img src="/suka1.jpg" alt="Suka" />
            </SukaFrame>
        </DivFrame>
        <Resume>
            <p>My Resume</p>
        </Resume>
    </AvatarWrapper>;
};
