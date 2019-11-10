import React from 'react';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";

import styles from './App.scss';

import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();




function App() {
  return (
      <Router history={customHistory}>
        <div className={styles.App}>
            <Header/>

            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/about'} component={About}/>
                <Route exact path={'/portfolio'} component={Portfolio}/>
            </Switch>

        </div>
      </Router>
  );
}

export default App;
