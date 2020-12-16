import React from 'react';
import LongContent from '../LongContent';
import ToTopButton from '../ToTopButton';
import { TOP_SCROLL_OFFSET } from '../../constants/scroll';

export default class PageBigClass extends React.Component {
    state = {
        showButton: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const showButton = window.pageYOffset > TOP_SCROLL_OFFSET;
        this.setState({ showButton });
    }

    render() {
        const { showButton } = this.state;
        return (
            <>
                <LongContent />
                {showButton && <ToTopButton />}
            </>
        );
    }
}
