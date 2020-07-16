import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';



export const Header = () => {
    return (
        <nav className={styles.header} >
            <Link to='/' className={styles.link}>Home</Link> {' '}
            <Link to='men'>Men Shoes</Link>
            <p className={styles.author}>Created by Mudassar Hanif</p>
        </nav>
    )
}
