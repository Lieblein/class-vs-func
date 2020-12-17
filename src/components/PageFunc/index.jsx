import React, { useState, useEffect } from 'react';
import LongContent from '../LongContent';
import ToTopButton from '../ToTopButton';
import { TOP_SCROLL_OFFSET } from '../../constants/scroll';

export default function PageFunc() {
    const [showButton, setShowButton] = useState(false);

    function onScroll() {
        const showButton = window.pageYOffset > TOP_SCROLL_OFFSET;
        setShowButton(showButton);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return function () {
            window.removeEventListener('scroll', onScroll);
        };
    });  

    return (
        <>
            <LongContent />
            {showButton && <ToTopButton />}
        </>
    );
}
