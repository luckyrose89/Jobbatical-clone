import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import App from './app';
import configureStore from './app/store';

const store = configureStore();

function renderApp(Component) {
  ReactDOM.render(
    <AppContainer>
      {Component}
    </AppContainer>,
    document.getElementById('root'),
  );
}

renderApp(
  <Provider store={store}>
    <App />
  </Provider>
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    renderApp(
      <Provider store={store}>
        <NextApp />
      </Provider>
    );
  });
}
