import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo_link}>Meet Me</Link>
            <nav className={styles.nav}>
                <ul className={styles.main_nav}></ul>
                <ul className={styles.auth_nav}>
                    <li className={styles.auth_nav_item}>
                        <Link to="/login" className={styles.auth_nav_link}>Log in</Link>
                    </li>
                    <li className={styles.auth_nav_item}>
                        <Link to="/registration" className={styles.auth_nav_link}>Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;