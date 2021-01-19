import { useState, useEffect } from 'react';

export default function useScrollListener(scrollPixelTarget) {
    const [isBelowScrollTarget, setIsBelowScrollTarget] = useState(false);

    function onScroll() {
        const isBelowScrollTarget = window.pageYOffset > scrollPixelTarget;
        setIsBelowScrollTarget(isBelowScrollTarget);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return function () {
            window.removeEventListener('scroll', onScroll);
        };
    });

    return isBelowScrollTarget;
}
