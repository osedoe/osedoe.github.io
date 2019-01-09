import React from 'react';
import styled from '@emotion/styled';

const AvatarWrapper = styled.div`
    place-self: center;
`;

const PhotoFrame = styled.div`
    transform: rotate(8deg);
`;

interface AboutAvatarProps {

}

export default class AboutAvatar extends React.Component<AboutAvatarProps, {}> {
    render() {
        return <AvatarWrapper>
            <div>
                <PhotoFrame>
                    <img src='/profile1.png' alt='Profile' />
                </PhotoFrame>
            </div>        
        </AvatarWrapper>
    }
}