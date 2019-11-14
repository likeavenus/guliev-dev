import React, {Component} from 'react';
import styles from './PortfolioContent.scss';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import Contacts from "../Contacts/Contacts";

export default class PortfolioContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                // {
                //     id: 1,
                //     name: 'Мне нужна Швейцария',
                //     href: 'http://switzerland.inbase.me/',
                //     imgSrc: require('./img/switzerland.jpg'),
                //     info: 'Сайт с несколькими страницами с освещением туристических мест в Швейцарии. Делал в паре с дизайнером строго по ТЗ.',
                //     hashtags: '#Gulp #PUG #SASS #JQuery #JavaScript'
                // },
                {
                    id: 5,
                    name: 'Aurora Streaming Solutions',
                    href: 'http://bk.auroraproduction.ru/',
                    imgSrc: require('./img/aurora.png'),
                    info: 'Разработал лэндинг для стриминговой компании',
                    hashtags: '#Gulp #PUG #SASS #JQuery #JavaScript #OnePageScroll'
                },
                {
                    id: 2,
                    name: 'Канбан-доска',
                    href: 'https://likeavenus.github.io/canban-test/',
                    imgSrc: require('./img/kanban.png'),
                    info: 'Разработал свою канбан доску, на чистом JavaScript, без бэкенда. В будущем возможны доработки. В первую очередь меня интересовало качество и процесс собственной реализации.',
                    hashtags: "#JavaScript #Drag'n'Drop"
                },
                {
                    id: 3,
                    name: 'АкваПомощь',
                    href: 'https://www.aquapomosh.ru/',
                    imgSrc: require('./img/aqua.jpg'),
                    info: 'Разрабатывал сайт по готовому дизайну для фирмы по ремонту / обслуживанию водоснабжающих агрегатов для частных домов',
                    hashtags: '#Gulp #PUG #SASS #JQuery #JavaScript'
                },
                {
                    id: 4,
                    name: 'Leto',
                    href: 'https://likeavenus.github.io/Leto/',
                    imgSrc: require('./img/leto.jpg'),
                    info: 'Разрабатывал главную страницу с анимациями',
                    hashtags: '#CSS Animations'
                },
                {
                    id: 6,
                    name: 'HTML Academy',
                    href: 'https://htmlacademy.ru/',
                    imgSrc: require('./img/html.png'),
                    info: 'Наставничаю в Академии на HTML & CSS',
                    hashtags: '#HTML #CSS #JavaScript'
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