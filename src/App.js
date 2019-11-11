import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
} from "react-router-dom";

import styles from './App.scss';

import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();




function App() {
  return (
      <HashRouter>
        <div className={styles.App}>
            <Header/>

            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/about'} component={About}/>
                <Route exact path={'/portfolio'} component={Portfolio}/>
            </Switch>

        </div>
      </HashRouter>
  );
}

export default App;
