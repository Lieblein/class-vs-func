/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import PageBigClass from '../PageBigClass';
import PageFunc from '../PageFunc';
import PageHOC from '../PageHOC';
import PageError from '../PageError';
import { BIG_CLASS_PAGE_ROUTE, FUNCTION_PAGE_ROUTE, HOC_PAGE_ROUTE } from '../../constants/routes';
import './app.pcss';
import './nav.pcss';

export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <BrowserRouter basename='/'>
                    <nav className='nav'>
                        <Link className='nav__link' to={ BIG_CLASS_PAGE_ROUTE }>Большой класс</Link>
                        <Link className='nav__link' to={ FUNCTION_PAGE_ROUTE }>Большая функция</Link>
                        <Link className='nav__link' to={ HOC_PAGE_ROUTE }>HOC</Link>
                    </nav>
                    <div className='app__content'>
                        <Switch>
                            <Route
                                exact={ true }
                                path={ BIG_CLASS_PAGE_ROUTE }
                                component={ PageBigClass }
                            />
                            <Route
                                exact={ true }
                                path={ FUNCTION_PAGE_ROUTE }
                                component={ PageFunc }
                            />
                            <Route
                                exact={ true }
                                path={ HOC_PAGE_ROUTE }
                                component={ PageHOC }
                            />
                            <Route
                                path='*'
                                component={ PageError }
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
