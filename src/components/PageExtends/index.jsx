import React from 'react';
import LongContent from '../LongContent';
import ToTopButton from '../ToTopButton';
import { TOP_SCROLL_OFFSET } from '../../constants/scroll';
import ComponentWithScrollListener from './ComponentWithScrollListener';

export default class PageExtends extends ComponentWithScrollListener {
    constructor() {
        super(TOP_SCROLL_OFFSET);
    }

    componentDidMount() {
        ComponentWithScrollListener.prototype.componentDidMount.call(this);
        console.log('shit happens');
    }

    render() {
        const { isBelowScrollTarget } = this.state;
        return (
            <>
                <LongContent />
                {isBelowScrollTarget && <ToTopButton />}
            </>
        );
    }
}
