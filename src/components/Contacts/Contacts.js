import React, {Component} from 'react';
import styles from './Contacts.scss';

export default class Contacts extends Component {
    render() {
        const contactsArr = [
            {
                id: 1,
                imgSrc: require('./img/telegram.svg'),
                href: 'tg://resolve?domain=likeavenus',
                alt: 'telegram'
            },
            {
                id: 2,
                imgSrc: require('./img/whatsapp.svg'),
                href: 'https://wa.me/79990421278',
                alt: 'whatsapp'
            }
        ];

        const contacts = contactsArr.map((item) => {
            return <a key={item.id} href={item.href} className={styles.contacts_link}>
                <img src={item.imgSrc} alt={item.alt}/>
            </a>
        });
        return (
            <div className={styles.block}>
                <p className={styles.block_text}>Пишите!</p>
                {contacts}
            </div>
        );
    }
}