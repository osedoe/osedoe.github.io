import React from 'react';
// import styled from 'react-emotion';

interface HeadingProps {
    title: string;
}

interface HeadingState {

}

export default class Heading extends React.Component<HeadingProps, HeadingState> {
    render() {
        const { title } = this.props;
        return <div>
            {title}
        </div>
    }
}