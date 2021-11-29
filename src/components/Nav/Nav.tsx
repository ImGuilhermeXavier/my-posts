import React from 'react'
import styles from './Nav.module.scss'
import albumsIcon from '../../static/icons/albums-icon.svg'
import postsIcon from '../../static/icons/posts-icon.svg'
import todosIcon from '../../static/icons/todos-icon.svg'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className={`${styles.nav} container`}>
            <Link to="/albums" className={styles.navLink}>
                <img src={albumsIcon} alt="Albums Icon" />
            </Link>
            <Link to="/" className={styles.navLink}>
                <img src={postsIcon} alt="Posts Icon" />
            </Link>
            <Link to="todos" className={styles.navLink}>
                <img src={todosIcon} alt="Todos Icon" />
            </Link>
        </nav>
    )
}

export default Nav
