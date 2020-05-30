import React, {Component} from 'react';
import {
    HashRouter,
    Switch,
    Route,
} from "react-router-dom";
import styles from './App.scss';
import { Header } from './components/Header/Header';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Background from "./components/Background/Background";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className={styles.App}>
                    <Background/>
                    <Header/>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/about'} component={About}/>
                        <Route path={'/portfolio'} component={Portfolio}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
