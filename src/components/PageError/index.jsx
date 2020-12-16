import React from 'react';
import { Link } from 'react-router-dom';

import { BIG_CLASS_PAGE_ROUTE } from '../../constants/routes';

export default class PageError extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Такой страницы не существует :(
                </h1>
                <Link to={ BIG_CLASS_PAGE_ROUTE }>На главную страницу</Link>
            </div>
        );
    }
}
