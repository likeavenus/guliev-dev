import React, {Component} from 'react';
import styles from './HomeContent.scss';
import elon from './img/elon.png';

import {Link} from 'react-router-dom';

export default class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emodzi: null,
            stories: true,
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
                },
                {
                    id: 4,
                    src: require('./img/4.png'),
                    emodzi: 'salt'
                },
                {
                    id: 5,
                    src: require('./img/5.png'),
                    emodzi: 'bomb'
                },
                {
                    id: 6,
                    src: require('./img/6.png'),
                    emodzi: 'spider'
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
                case 'salt':
                    this.setState({
                        emodzi: emodzi
                    });
                    break;
                case 'bomb':
                    this.setState({
                        emodzi: emodzi
                    });
                    break;
                case 'spider':
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


    handleOpenStories = () => {
        if (this.state.stories !== null) {
            this.setState({
                stories: false
            })
        }
    };

    handleCloseStories = () => {
        this.setState({
            stories: null
        })
    };
    
    

    render() {

        const {infoCounters, userPhotos, emodzi, stories} = this.state;

        let infoArray = infoCounters.map(item => {
            return (
                <div key={item.id} className={styles.counter_info}>
                    <div className={styles.counter_top}>{item.counter}</div>
                    <div className={styles.counter_bot}>{item.counterName}</div>
                </div>
            )
        });

        let photosArr = userPhotos.map(item => {
            return (
                <div onClick={(()=> {this.handleOnAvatarClick(item.emodzi)})} key={item.id} className={styles.user_photo_wrap}>
                    <img src={item.src} alt=""/>
                </div>
            )
        });

        let emodziElem = null;
        const emodziArray = [];

        function getActualEmodzi(emodzi, emodziSymbol) {
            for (let i = 0; i < 50; i++) {
                emodziArray.push(<span key={i} aria-label={emodzi} role={'img'} className={styles.emodzi}>{emodziSymbol}</span>);
            }
            return emodziElem = <div className={styles.emodzi_box}>
                {emodziArray}
            </div>;
        }

        switch (emodzi) {
            case 'roflan':
                getActualEmodzi(emodzi, '🤪');
                break;
            case 'love':
                getActualEmodzi(emodzi, '❤️');
                break;
            case 'fire':
                getActualEmodzi(emodzi, '🔥');
                break;
            case 'salt':
                getActualEmodzi(emodzi, '🧂');
                break;
            case 'bomb':
                getActualEmodzi(emodzi, '💣');
                break;
            case 'spider':
                getActualEmodzi(emodzi, '🕷️');
                break;
            case null:
                emodziElem = null;
                break;
            default:
                console.log('default');
        }

        let galleryBox = (
            <div className={styles.user_gallery}>
                {photosArr}
            </div>);
        if (emodzi !== null) {
            galleryBox = (
                <div className={`${styles.user_gallery} ${styles.active}`}>
                    {photosArr}
                </div>
            )
        }

        let blockAvatarStyles = styles.block_avatar;
        let story = null;
        if (!stories) {
            blockAvatarStyles += ` ${styles.active}`;

            story = (
                <div className={styles.story_box}>
                    <button onClick={this.handleCloseStories} type={'button'} className={styles.story_close}>
                        <span> </span>
                        <span> </span>
                     </button>

                    <div className={styles.story_preview}>Скоро здесь появится офигительная история... но не сегодня</div>
                </div>
            )
        }

        if (stories === null) {
            story = null;
        }

        return (
            <div className={styles.block}>
                {story}

                <div className={styles.block_top_info}>
                    <div onClick={this.handleOpenStories} className={blockAvatarStyles}>
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

                {galleryBox}
                {emodziElem}

                <Link className={styles.block_link} to={'/about'}>Обо мне</Link>
            </div>
        );
    }
}