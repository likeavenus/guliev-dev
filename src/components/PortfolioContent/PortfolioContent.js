import React, {Component} from 'react';
import styles from './PortfolioContent.scss';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

export default class PortfolioContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    id: 1,
                    name: 'Мне нужна Швейцария',
                    href: 'http://switzerland.inbase.me/',
                    imgSrc: require('./img/switzerland.jpg'),
                    info: 'Разрабатывал сайт по готовому дизайну'
                },
                {
                    id: 2,
                    name: 'АкваПомощь',
                    href: 'https://www.aquapomosh.ru/',
                    imgSrc: require('./img/aqua.jpg'),
                    info: 'Разрабатывал сайт по готовому дизайну'
                },
                {
                    id: 3,
                    name: 'Канбан-доска',
                    href: 'https://likeavenus.github.io/canban-test/',
                    imgSrc: require('./img/kanban.png'),
                    info: 'Разработал свою канбан доску, на чистом JavaScript, без бэкенда.'
                }
            ]
        }
    }

    render() {
        const {projects} = this.state;
        const projectsArray = [];

        projects.map((item)=> {
            return projectsArray.push(
                <PortfolioItem
                    key={item.id}
                    href={item.href}
                    projectName={item.name}
                    projectAvatar={item.imgSrc}
                    avatarAlt={item.name}
                    projectInfo={item.info}
                />
            )
        });

        return(
            <div className={styles.block}>
                <div className={styles.block_wrapper}>
                    {projectsArray}
                </div>

            </div>
        )
    }
}