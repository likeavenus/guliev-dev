import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            burgerMenu: false
        }
    }

    handleToggleBurgerMenu = () => {
        this.setState({
            burgerMenu: !this.state.burgerMenu
        })
    };

    render() {

        const {burgerMenu} = this.state;
        let burgerButton = styles.header_button;
        let nav = null;

        if (burgerMenu) {
            burgerButton += ` ${styles.active}`;
            nav = <nav className={styles.header_nav}>
                <ul className={styles.header_list}>
                    <li className={styles.header_item}>
                        <Link className={styles.header_link} onClick={this.handleToggleBurgerMenu} to={'/'}>Home</Link>
                    </li>
                    <li className={styles.header_item}>
                        <Link className={styles.header_link} onClick={this.handleToggleBurgerMenu} to={'/about'}>About</Link>
                    </li>
                    <li className={styles.header_item}>
                        <Link className={styles.header_link} onClick={this.handleToggleBurgerMenu} to={'/portfolio'}>Portfolio</Link>
                    </li>
                </ul>
            </nav>;
        }

        return(
            <header className={styles.header}>
                <button onClick={this.handleToggleBurgerMenu} className={burgerButton} type={'button'}>
                    <span className={styles.button_top}></span>
                    <span className={styles.button_mid}></span>
                    <span className={styles.button_bot}></span>
                </button>
                {nav}
            </header>
        )
    }
}