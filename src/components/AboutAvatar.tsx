import React from 'react';
import styled from '@emotion/styled';

const AvatarWrapper = styled.div`
    place-self: center;
`;

const PhotoFrame = styled.div`
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

interface AboutAvatarProps {

}

export default class AboutAvatar extends React.Component<AboutAvatarProps, {}> {
    render() {
        return <AvatarWrapper>
            <div>
                <PhotoFrame>
                    <img src="/profile1.png" alt="Profile" />
                </PhotoFrame>
            </div>
            <Resume>
                <p>My Resume</p>
            </Resume>
        </AvatarWrapper>;
    }
}
