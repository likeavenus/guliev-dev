import React, {Component} from 'react';
import styles from './PortfolioContent.scss';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import Contacts from "../Contacts/Contacts";
import { projects } from "./projects";

export default class PortfolioContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects
        }
    }

    render() {
        const {projects} = this.state;
        const projectsArray = [];

        projects.map(item => {
            return projectsArray.push(
                <PortfolioItem
                    key={item.id}
                    href={item.href}
                    projectName={item.name}
                    projectAvatar={item.imgSrc}
                    avatarAlt={item.name}
                    projectInfo={item.info}
                    hashtags={item.hashtags}
                />
            )
        });

        return(
            <div className={styles.block}>
                <div className={styles.block_wrapper}>
                    {projectsArray}
                    <Contacts/>
                </div>
            </div>
        )
    }
}
