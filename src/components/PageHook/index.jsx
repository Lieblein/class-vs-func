import React from 'react';
import LongContent from '../LongContent';
import ToTopButton from '../ToTopButton';
import { TOP_SCROLL_OFFSET } from '../../constants/scroll';
import useScrollListener from './useScrollListener';

export default function PageHook() {
    const showButton = useScrollListener(TOP_SCROLL_OFFSET);

    return (
        <>
            <LongContent />
            {showButton && <ToTopButton />}
        </>
    );
}
