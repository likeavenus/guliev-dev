import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

export function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const currentLocation = window.location.href.split('/')[window.location.href.split('/').length - 1];

    let burgerButton = styles.header_button;
    let nav = null;

    if (burgerMenu) {
        burgerButton += ` ${styles.active}`;
        nav = (
            <nav className={styles.header_nav}>
                <ul className={styles.header_list}>
                    <li className={styles.header_item}>
                        <Link className={styles.header_link} onClick={() => { setBurgerMenu(!burgerMenu) }} to={'/'}>Главная</Link>
                    </li>
                    <li className={styles.header_item}>
                        <Link className={styles.header_link} onClick={() => { setBurgerMenu(!burgerMenu) }} to={'/about'}>Обо мне</Link>
                    </li>
                    <li className={styles.header_item}>
                        <Link className={styles.header_link} onClick={() => { setBurgerMenu(!burgerMenu) }} to={'/portfolio'}>Работы</Link>
                    </li>
                </ul>
            </nav>
        );
    }

    if (currentLocation === 'about') {
        burgerButton += ` ${styles.black}`;
    }

    return (
        <header className={styles.header}>
            <button onClick={() => { setBurgerMenu(!burgerMenu) }} className={burgerButton} type={'button'}>
                <span className={styles.button_top}> </span>
                <span className={styles.button_mid}> </span>
                <span className={styles.button_bot}> </span>
            </button>
            {nav}
        </header>
    )
}
