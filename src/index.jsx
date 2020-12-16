/* eslint-disable-next-line import/no-extraneous-dependencies */
import { hot } from 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const mountNode = document.getElementById('react-app');
function renderApplication(Component) {
    ReactDOM.render(<Component />, mountNode);
}

renderApplication(App);

if (module.hot) {
    module.hot.accept(
        './components/App',
        function () {
            // TODO не работает, разобраться
            renderApplication(hot(App));
        }
    );
}
