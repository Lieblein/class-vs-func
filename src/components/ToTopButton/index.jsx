import React from 'react';
import './to-top-button.pcss';

export default class ToTopButton extends React.Component {
    onClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <button className='to-top-button' type='button' onClick={ this.onClick }>
                Наверх
            </button>
        );
    }
}
