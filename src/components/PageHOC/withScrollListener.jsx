import React from 'react';

const withScrollListener = (Component, scrollPixelTarget) => {
    class WithScrollListener extends React.Component {
        state = {
            isBelowScrollTarget: false
        };
    
        componentDidMount() {
            window.addEventListener('scroll', this.onScroll);
            this.onScroll();
        }
    
        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll);
        }
    
        onScroll = () => {
            const isBelowScrollTarget = window.pageYOffset > scrollPixelTarget;
            this.setState({ isBelowScrollTarget });
        }

        render() {
            const { isBelowScrollTarget } = this.state;
            return (
                <Component
                    { ...this.props }
                    isBelowScrollTarget={ isBelowScrollTarget }
                />
            );
        }
    }

    return WithScrollListener;
};

export default withScrollListener;
