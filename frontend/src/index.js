import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store"
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
export const Client_id = process.env.REACT_APP_CLIENT_ID
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={Client_id}>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>

  </React.StrictMode>
);

