/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import PageBigClass from '../PageBigClass';
import PageFunc from '../PageFunc';
import PageHOC from '../PageHOC';
import PageHook from '../PageHook';
import PageDecorator from '../PageDecorator';
import PageRenderProps from '../PageRenderProps';
import PageExtends from '../PageExtends';
import PageError from '../PageError';
import {
    BIG_CLASS_PAGE_ROUTE,
    FUNCTION_PAGE_ROUTE,
    HOC_PAGE_ROUTE,
    HOOK_PAGE_ROUTE,
    RENDER_PROPS_PAGE_ROUTE,
    DECORATOR_PAGE_ROUTE,
    EXTENDS_PAGE_ROUTE
} from '../../constants/routes';
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
                        <Link className='nav__link' to={ HOOK_PAGE_ROUTE }>Hook</Link>
                        <Link className='nav__link' to={ RENDER_PROPS_PAGE_ROUTE }>Render props</Link>
                        <Link className='nav__link' to={ EXTENDS_PAGE_ROUTE }>Наследование</Link>
                        <Link className='nav__link' to={ DECORATOR_PAGE_ROUTE }>Decorator</Link>
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
                                exact={ true }
                                path={ HOOK_PAGE_ROUTE }
                                component={ PageHook }
                            />
                            <Route
                                exact={ true }
                                path={ RENDER_PROPS_PAGE_ROUTE }
                                component={ PageRenderProps }
                            />
                            <Route
                                exact={ true }
                                path={ EXTENDS_PAGE_ROUTE }
                                component={ PageExtends }
                            />
                            <Route
                                exact={ true }
                                path={ DECORATOR_PAGE_ROUTE }
                                component={ PageDecorator }
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
