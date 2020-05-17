import React, {Component} from 'react';
import HomeContent from '../../components/HomeContent/HomeContent';
import {getTopWindow} from "../../helper";

export default class Home extends Component {
    componentDidMount() {
        getTopWindow();
    }

    render() {
        return(
            <HomeContent/>
        )
    }
}