    import React from 'react';

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