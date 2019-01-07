import React from 'react';
import { inject, observer } from 'mobx-react';
import { LandingStore } from '../stores/LandingStore';
import './Landing.css';

export interface LandingProps {
    landingStore?: LandingStore;
}

@inject('landingStore')
@observer
export default class Landing extends React.Component<LandingProps, {}> {
    render() {
        const { heading1, heading2, heading3 } = this.props.landingStore!;
        console.log(this.props.landingStore)
        return <div className={'landingWrapper'}>
            <div className={'jumbotron'}>
                <h1>{heading1}</h1>
                <h2>{heading2}</h2>
                <h2>{heading3}</h2>
            </div>
        </div>
    }
}