import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';
import theme from './Theme.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './aws-exports'
import Navbar from './components/Navbar'
import Layout from './Layout'

Amplify.configure(config);
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </Layout>
    </Router >
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
