import React from 'react';
import LongContent from '../LongContent';
import ToTopButton from '../ToTopButton';
import { TOP_SCROLL_OFFSET } from '../../constants/scroll';
import ScrollListener from './ScrollListener';

export default function PageRenderProps() {
    return (
        <ScrollListener
            render={ (showButton) =>
                <>
                    <LongContent />
                    {showButton && <ToTopButton />}
                </>
            }
            scrollPixelTarget={ TOP_SCROLL_OFFSET }
        />
    );
}
