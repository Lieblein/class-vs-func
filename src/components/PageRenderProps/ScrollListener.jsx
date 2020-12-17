/* eslint-disable react/prop-types */
import React from 'react';

export default class ScrollListener extends React.Component {
    state = {
        isBelowScrollTarget: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const { scrollPixelTarget } = this.props;
        const isBelowScrollTarget = window.pageYOffset > scrollPixelTarget;
        this.setState({ isBelowScrollTarget });
    }

    render() {
        const { render } = this.props;
        const { isBelowScrollTarget } = this.state;
        return render(isBelowScrollTarget);
    }
}
