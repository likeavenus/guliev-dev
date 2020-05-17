import React, {Component} from 'react';
import AboutContent from "../../components/AboutContent/AboutContent";
import { getTopWindow } from "../../helper";

export default class About extends Component {
    componentDidMount() {
        getTopWindow();
    }

    render() {
        return(
            <AboutContent/>
        )
    }
}