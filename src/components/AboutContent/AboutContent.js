import React, {Component} from 'react';
import styles from './AboutContent.scss';

export default class AboutContent extends Component{
    render() {

        return(
            <div className={styles.block}>
                <div className={styles.block_wrapper}>
                    <h1 className={styles.block_title}>Профессия изначально должна быть актом любви. И&nbsp;никак не&nbsp;браком по&nbsp;расчету. И&nbsp;пока&nbsp;не&nbsp;поздно, не&nbsp;забывайте о&nbsp;том, что&nbsp;дело всей жизни&nbsp;—&nbsp;это&nbsp;не&nbsp;дело, а&nbsp;жизнь.</h1>
                    <p className={styles.block_title_autor}>—  Джейсон Стэтхэм</p>

                    <p className={styles.block_info_text}>Верстаю адаптивно, семантично, кроссбраузерно.</p>
                    <p className={styles.block_info_text}>Основной стек технологий:</p>
                    <p className={styles.block_info_text}>HTML, CSS, JS;</p>
                    <p className={styles.block_info_text}>На основе этих технологий использую:</p>
                    <p className={styles.block_info_text}>PUG, SCSS, Gulp, Webpack, React;</p>
                    <p className={styles.block_info_text}>Так же работал с Redux, но не плотно;</p>
                    <p className={styles.block_info_text}>Есть опыт создания 2D игр на Phaser 2, а так же в большом React-проекте;</p>
                    <p className={styles.block_info_text}>Знаю некоторые алгоритмы, благодаря книге "Грокаем Алгоритмы". Пока в процессе изучения;</p>
                    <p className={styles.block_info_text}>Следующими в изучении будут:</p>
                    <p className={styles.block_info_text}>Паттерны проектирования, GLSL(WebGL), WebSocket, Node.js, React Native, Svetle, математика;</p>
                    <p className={styles.block_info_text}>Так же продолжаю изучать: JavaScript, Redux, WebPack;</p>
                    <p className={styles.block_info_text}>Немного пробовал:</p>
                    <p className={styles.block_info_text}>Node.js, Three.js</p>
                    <p className={styles.block_info_text}>Глубоко убеждён, что не нужно самозабвенно изучать какой-либо фреймворк, не понимая как он работает внутри.</p>
                </div>
            </div>
        )
    }
}