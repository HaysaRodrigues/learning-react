import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home'
import AuterBox from './components/Autor';
import LivroAdmin from './components/LivroAdmin';

ReactDOM.render((

    <Router>
        <App>
            <Switch>            
                <Route exact path="/" component={Home}/>
                <Route path="/autor" component={AuterBox}/>
                <Route path="/livro" component={LivroAdmin}/>                
            </Switch>            
        </App>
    </Router>
),document.getElementById('root'));

serviceWorker.unregister();
