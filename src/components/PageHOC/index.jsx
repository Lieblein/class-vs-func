import React from 'react';
import LongContent from '../LongContent';
import ToTopButton from '../ToTopButton';
import { TOP_SCROLL_OFFSET } from '../../constants/scroll';
import withScrollListener from './withScrollListener';

function PageHOC({ isBelowScrollTarget }) {
    return (
        <>
            <LongContent />
            {isBelowScrollTarget && <ToTopButton />}
        </>
    );
}

export default withScrollListener(PageHOC, TOP_SCROLL_OFFSET);