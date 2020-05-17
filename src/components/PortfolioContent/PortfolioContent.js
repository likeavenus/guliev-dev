import React, {Component} from 'react';
import styles from './PortfolioContent.scss';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import Contacts from "../Contacts/Contacts";

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
                    info: <p className={styles.block_info}>Туристический сайт о Швейцарии</p>,
                    hashtags: '#Gulp #PUG #SASS #JQuery #JavaScript'
                },
                {
                    id: 2,
                    name: 'Канбан-доска',
                    href: 'https://likeavenus.github.io/canban-test/',
                    imgSrc: require('./img/kanban.png'),
                    info: <p className={styles.block_info}>Разработал свою канбан доску, на чистом JavaScript, без бэкенда. В будущем возможны доработки. В первую очередь меня интересовало качество и процесс собственной реализации.'</p>,
                    hashtags: "#JavaScript #Drag'n'Drop"
                },
                {
                    id: 3,
                    name: 'Тестовое приложение на React+Redux',
                    href: 'https://likeavenus.github.io/spa-dev/',
                    imgSrc: require('./img/rr.png'),
                    info: <p className={styles.block_info}>Один из выполненных мною тестов, с целью изучения Redux</p>,
                    hashtags: '#JavaScript, #React, #Redux, #Webpack, #SASS'
                },
                {
                    id: 4,
                    name: 'Aurora Streaming Solutions',
                    href: 'http://bk.auroraproduction.ru/',
                    imgSrc: require('./img/aurora.png'),
                    info: <p className={styles.block_info}>Разработал лэндинг для стриминговой компании</p>,
                    hashtags: '#Gulp #PUG #SASS #JQuery #JavaScript #OnePageScroll'
                },
                {
                    id: 5,
                    name: 'Thunder',
                    href: 'https://likeavenus.github.io/Thunder/',
                    imgSrc: require('./img/thunder.jpg'),
                    info: <p className={styles.block_info}>Мини поделка на three.js</p>,
                    hashtags: '#threeJS'
                },
                {
                    id: 6,
                    name: 'Leto',
                    href: 'https://likeavenus.github.io/Leto/',
                    imgSrc: require('./img/leto.jpg'),
                    info: <p className={styles.block_info}>Разрабатывал главную страницу с анимациями</p>,
                    hashtags: '#CSS Animations'
                },
                {
                    id: 7,
                    name: 'HTML Academy',
                    href: 'https://htmlacademy.ru/',
                    imgSrc: require('./img/html.png'),
                    info: <p className={styles.block_info}>Наставничаю в Академии на JavaScript 1 уровень, HTML&nbsp;&&nbsp;CSS</p>,
                    hashtags: '#HTML #CSS #JavaScript'
                },
                {
                    id: 8,
                    name: 'АкваПомощь',
                    href: 'https://www.aquapomosh.ru/',
                    imgSrc: require('./img/aqua.jpg'),
                    info: <p className={styles.block_info}>Разрабатывал сайт по готовому дизайну для фирмы по ремонту / обслуживанию водоснабжающих агрегатов для частных домов</p>,
                    hashtags: '#Gulp #PUG #SASS #JQuery #JavaScript'
                },
            ]
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
