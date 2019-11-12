import React, {Component} from 'react';
import styles from './HomeContent.scss';

import elon from './img/elon.png';

export default class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emodzi: null,
            infoCounters: [
                {
                    id: 1,
                    counter: 603,
                    counterName: 'Публикации'
                },
                {
                    id: 2,
                    counter: 103,
                    counterName: 'Подписчики'
                },
                {
                    id: 3,
                    counter: 147,
                    counterName: 'Подписки'
                },
            ],
            userPhotos: [
                {
                    id: 1,
                    src: require('./img/1.png'),
                    emodzi: 'roflan'
                },
                {
                    id: 2,
                    src: require('./img/2.png'),
                    emodzi: 'love'
                },
                {
                    id: 3,
                    src: require('./img/3.png'),
                    emodzi: 'fire'
                }
            ]
        }
    }


    handleOnAvatarClick = (emodzi) => {
        if (this.state.emodzi === null) {
            switch (emodzi) {
                case 'roflan':
                    this.setState({
                        emodzi: emodzi
                    });
                    break;
                case 'love':
                    this.setState({
                        emodzi: emodzi
                    });
                    break;
                case 'fire':
                    this.setState({
                        emodzi: emodzi
                    });
                    break;
                default:
                    console.log('default');
            }
        }
        setTimeout(()=> {
            this.setState({
                emodzi: null,
            })
        }, 2000)
    };

    render() {

        const {infoCounters, userPhotos, emodzi} = this.state;

        let infoArray = infoCounters.map((item) => {
            return <div key={item.id} className={styles.counter_info}>
                <div className={styles.counter_top}>{item.counter}</div>
                <div className={styles.counter_bot}>{item.counterName}</div>
            </div>
        });

        let photosArr = userPhotos.map((item) => {
            return <div onClick={(()=> {this.handleOnAvatarClick(item.emodzi)})} key={item.id} className={styles.user_photo_wrap}>
                <img src={item.src} alt=""/>
            </div>
        });

        let emodziElem = null;

        switch (emodzi) {
            case 'roflan':
                emodziElem = <div className={styles.emodzi_box}>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                    <div className={styles.emodzi}>🤪</div>
                </div>;
                break;
            case 'love':
                emodziElem = <div className={styles.emodzi_box}>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                    <div className={styles.emodzi}>❤️</div>
                </div>;
                break;
            case 'fire':
                emodziElem = <div className={styles.emodzi_box}>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                    <div className={styles.emodzi}>🔥</div>
                </div>;
                break;
            case null:
                emodziElem = null;
            default:
                console.log('default');
        }


        return (
            <div className={styles.block}>
                <div className={styles.block_top_info}>
                    <div className={styles.block_avatar}>
                        <img src={elon} alt="Elon Mask"/>
                    </div>
                    <div className={styles.block_counters}>
                        {infoArray}
                    </div>
                </div>
                <div className={styles.user_info}>
                    <div className={styles.block_username}>Рафаэль Гулиев</div>
                    <div className={styles.block_profession}>Front-end developer</div>
                </div>

                <div className={styles.user_gallery}>
                    {photosArr}
                </div>

                {emodziElem}
            </div>
        );
    }
}