import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Layout from './components/Layout';
import SEO from './components/SEO';
import { configStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_ENDPOINT_1;
axios.defaults.withCredentials = true;

const store = configStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // * The problem with react strict mode sending double api request
  // ? https://www.phind.com/search?cache=ukvnkrsnaeiuxq5nnsjiwr3s
  <React.StrictMode>
    <Layout>
      <SEO
        title={process.env.REACT_APP_SITE_TITLE}
      />
      <ToastContainer />
      <Provider store={store}>
        <App />
      </Provider>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
