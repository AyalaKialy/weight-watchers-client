import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth0ProviderWithHistory from './components/Auth0ProviderWithNavigate';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import Reducer from "./redux/reducer";
import { Provider } from 'react-redux';

const store=createStore(Reducer);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <Auth0ProviderWithHistory>
    <Provider store={store}>
    <App />
    </Provider>
    </Auth0ProviderWithHistory>
  </Router>
);

reportWebVitals();
