import React from 'react';
// import styles from 'react-emotion';

interface NavProps {

}

interface NavState {
    navTitle: string;
    display: boolean;
    navigation: string[];
}

export default class Nav extends React.Component<NavProps, NavState> {
    constructor(props: string) {
        super(props);
        this.state = {
            navTitle: 'Menu',
            display: false,
            navigation: [
                'home',
                'about',
                'work',
                'blog'
            ]
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        const currentState = this.state.display;
        this.setState({ display: !currentState });
    }

    render() {
        const { navTitle, navigation } = this.state;
        return <div onClick={this.toggleNav}>
            <div>
                {navTitle}
            </div>
            <nav>
                {navigation.map(li=> `${li}  `)}
            </nav>
        </div>
    }
}