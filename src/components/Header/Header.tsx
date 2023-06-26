import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import cs from 'classnames';

import Input from '../Input/Input';

import styles from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.openBtn} onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/src/assets/images/icons/menu.svg" alt="Menu" />
        </button>

        <Link to="/">
          <img className={styles.logo} src="/src/assets/images/logo.png" alt="Sufle" />
        </Link>

        <nav className={cs(styles.nav, { [styles.navOpen]: menuOpen })}>
          <div className={styles.navHeader}></div>

          <ul>
            <li className={styles.navHeader}>
              <Link to="/">
                <img className={styles.navLogo} src="/src/assets/images/logo.png" alt="Sufle" />
              </Link>

              <button className={styles.closeBtn} onClick={() => setMenuOpen(!menuOpen)}>
                <img src="/src/assets/images/icons/close.svg" alt="Close" />
              </button>
            </li>

            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
                Ana Səhifə
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? styles.active : '')}>
                Məhsullar
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? styles.active : '')}>
                Qalereya
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/shops" className={({ isActive }) => (isActive ? styles.active : '')}>
                Mağazalarımız
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>
                Haqqımızda
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : '')}>
                Əlaqə
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/vacancy" className={({ isActive }) => (isActive ? styles.active : '')}>
                Vakansiya
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </NavLink>
            </li>

            <li></li>

            <li className={styles.navFooter}>
              <a href="#">
                <img src="/src/assets/images/icons/facebook.svg" alt="Facebook" />
              </a>

              <a href="#">
                <img src="/src/assets/images/icons/instagram.svg" alt="Instagram" />
              </a>
            </li>
          </ul>
        </nav>

        <form method="GET" action="/products">
          <Input
            name="search"
            placeholder="Axtarış..."
            className={styles.search}
            icon="/src/assets/images/icons/search.svg"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
