import React from 'react';
import LongContent from '../LongContent';
import ToTopButton from '../ToTopButton';
import { TOP_SCROLL_OFFSET } from '../../constants/scroll';
import ScrollListener from './ScrollListener';

export default class PageRenderProps extends React.Component {
    render() {
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
}
