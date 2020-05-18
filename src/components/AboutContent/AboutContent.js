import React from 'react';
import styles from './AboutContent.scss';

export default function AboutContent() {
    return(
        <div className={styles.block}>
            <div className={styles.block_wrapper}>
                <h1 className={styles.block_title}>Профессия изначально должна быть актом любви. И&nbsp;никак не&nbsp;браком по&nbsp;расчету. И&nbsp;пока&nbsp;не&nbsp;поздно, не&nbsp;забывайте о&nbsp;том, что&nbsp;дело всей жизни&nbsp;—&nbsp;это&nbsp;не&nbsp;дело, а&nbsp;жизнь.</h1>
                <p className={styles.block_title_autor}>—  Джейсон Стэтхэм</p>

                <p className={styles.block_info_text}>Верстаю адаптивно, семантично, кроссбраузерно.</p>
                <p className={styles.block_info_text}>Основной стек технологий:</p>
                <p className={styles.block_info_text}>HTML, CSS, JS;</p>
                <p className={styles.block_info_text}>На основе этих технологий использую:</p>
                <p className={styles.block_info_text}>React, Redux, Node.js, PUG, SCSS, Gulp, Webpack, Canvas, БЭМ;</p>
                <p className={styles.block_info_text}>Использую только ES6+;</p>
                <p className={styles.block_info_text}>Есть опыт создания 2D игр на Phaser 2, а так же в большом React-&nbsp;проекте;</p>
                <p className={styles.block_info_text}>Так же продолжаю изучать: JavaScript, Node.js, React/Redux, Webpack;</p>
                <p className={styles.block_info_text}>Немного пробовал:</p>
                <p className={styles.block_info_text}>Three.js, Tensorflow.js;</p>
                <p className={styles.block_info_text}>Есть базовые знания классических алгоритмов. Пока в процессе изучения;</p>
                <p className={styles.block_info_text}>Опыт использования других языков: Python, для&nbsp;машинного&nbsp;обучения;</p>
                <p className={styles.block_info_text}>С большим интересом смотрю на: машинное обучение, three.js, разработка больших, сложных сервисов;</p>

                <p className={styles.block_info_text}>Глубоко убеждён, что не нужно самозабвенно изучать какой-либо фреймворк, не понимая как он работает внутри.</p>
            </div>
        </div>
    )
}
