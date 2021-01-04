/* eslint-disable react/no-unused-state */
import React from 'react';

// если используешь ts, сделай этот класс абстрактным
export default class ComponentWithScrollListener extends React.Component {
    state = {
        isBelowScrollTarget: false
    };

    constructor(scrollPixelTarget) {
        super();
        this.scrollPixelTarget = scrollPixelTarget;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        this.onScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const isBelowScrollTarget = window.pageYOffset > this.scrollPixelTarget;
        this.setState({ isBelowScrollTarget });
    }
}
