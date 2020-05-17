import React, {Component} from 'react';
import PortfolioContent from '../../components/PortfolioContent/PortfolioContent';
import {getTopWindow} from "../../helper";

export default class Portfolio extends Component {
    componentDidMount() {
        getTopWindow();
    }
    
    render() {
        return(
            <PortfolioContent/>
        )
    }
}