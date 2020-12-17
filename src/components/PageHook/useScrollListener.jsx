import { useState, useEffect } from 'react';

export default function useScrollListener(scrollPixelTarget) {
    const [showButton, setShowButton] = useState(false);

    function onScroll() {
        const showButton = window.pageYOffset > scrollPixelTarget;
        setShowButton(showButton);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return function () {
            window.removeEventListener('scroll', onScroll);
        };
    });

    return showButton;
}
