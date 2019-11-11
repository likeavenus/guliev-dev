import React, {Component} from 'react';
import styles from './HomeContent.scss';

export default class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            infoCounters: [
                {
                    counter: 603,
                    counterName: 'Публикации'
                },
                {
                    counter: 103,
                    counterName: 'Подписчики'
                },
                {
                    counter: 147,
                    counterName: 'Подписки'
                },
            ]
        }
    }

    render() {
        return (
            <div className={styles.block}>
                <div className={styles.block_top_info}>
                    <div className={styles.block_avatar}></div>
                    <div className={styles.block_counters}>
                        <div className={styles.counter_info}>
                            <div className={styles.counter_top}>603</div>
                            <div className={styles.counter_bot}>Публикации</div>
                        </div>
                    </div>
                </div>
                <h1 className={styles.block_title}>Рафаэль Гулиев</h1>
            </div>
        );
    }
}