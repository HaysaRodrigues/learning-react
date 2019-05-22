import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
(
  <Router>
    <Route exact path="/" component={App}/>
    <Route path="/autor" />
    <Route path="/livro" />
  </Router>
)
, document.getElementById('root'));
serviceWorker.unregister();
