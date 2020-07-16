import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';



export const Header = () => {
    return (
        <nav className={styles.header} >
            <Link to='/' className={styles.link}>Home</Link> {' '}
            <Link to='products'>Products</Link>
        </nav>
    )
}
