import React from 'react';
import styled from '@emotion/styled';

const HeadingBefore = styled.span`

`;

interface HeadingProps {
    title: string;
}

export default class Heading extends React.Component<HeadingProps, {}> {
    render() {
        const { title } = this.props;
        return <div>
            <span>{title}</span>
        </div>
    }
}