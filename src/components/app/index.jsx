/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageBigClass from '../PageBigClass';
import PageFunc from '../PageFunc';
import PageHOC from '../PageHOC';
import PageError from '../PageError';
import { BIG_CLASS_PAGE_ROUTE, FUNCTION_PAGE_ROUTE, HOC_PAGE_ROUTE } from '../../constants/routes';
import './app.pcss';

export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <BrowserRouter basename='/'>
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
                </BrowserRouter>
            </div>
        );
    }
}
