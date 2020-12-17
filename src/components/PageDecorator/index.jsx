import React from 'react';
import LongContent from '../LongContent';
import ToTopButton from '../ToTopButton';
import { TOP_SCROLL_OFFSET } from '../../constants/scroll';
import eventListener from './eventListener';

// в декораторе не получится использовать setState, эту логику не переиспользовать
@eventListener('scroll', 'onScroll')
export default class PageDecorator extends React.Component {
    state = {
        showButton: false
    };

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
