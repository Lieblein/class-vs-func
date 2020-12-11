import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { AppContainer } from 'react-hot-loader'

import App from './components/App';

const mountNode = document.getElementById('react-app');

class Application extends React.Component {
    render() {
        return (
            <BrowserRouter basename='/'>
                <App />
            </BrowserRouter>
        );
    }
}

const renderApplication = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        mountNode
    );
}

renderApplication(Application);

if (module.hot) {
    module.hot.accept('./components/App', () => { renderApplication(Application) });
}
