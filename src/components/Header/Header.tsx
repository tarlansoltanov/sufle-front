import { useState } from 'react';
import cs from 'classnames';

import styles from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.openBtn} onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/src/assets/images/icons/menu.svg" alt="Menu" />
        </button>

        <img className={styles.logo} src="/src/assets/images/logo.png" alt="Sufle" />

        <nav className={cs(styles.nav, { [styles.navOpen]: menuOpen })}>
          <div className={styles.navHeader}></div>

          <ul>
            <li className={styles.navHeader}>
              <img className={styles.navLogo} src="/src/assets/images/logo.png" alt="Sufle" />

              <button className={styles.closeBtn} onClick={() => setMenuOpen(!menuOpen)}>
                <img src="/src/assets/images/icons/close.svg" alt="Close" />
              </button>
            </li>

            <li className={styles.active}>
              <a href="#">
                Ana Səhifə
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </a>
            </li>

            <li>
              <a href="#">
                Məhsullar
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </a>
            </li>

            <li>
              <a href="#">
                Qalereya
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </a>
            </li>

            <li>
              <a href="#">
                Mağazalarımız
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </a>
            </li>

            <li>
              <a href="#">
                Haqqımızda
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </a>
            </li>

            <li>
              <a href="#">
                Əlaqə
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </a>
            </li>

            <li>
              <a href="#">
                Vakansiya
                <img src="/src/assets/images/icons/arrow.svg" alt="Arrow" />
              </a>
            </li>

            <li></li>

            <li className={styles.navFooter}>
              <a href="#">
                <img src="/src/assets/images/icons/facebook.svg" alt="Facebook" />
              </a>

              <a href="#">
                <img src="/src/assets/images/icons/twitter.svg" alt="Twitter" />
              </a>

              <a href="#">
                <img src="/src/assets/images/icons/instagram.svg" alt="Instagram" />
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.search}>
          <img src="/src/assets/images/icons/search.svg" alt="Search" />
          <input type="text" placeholder="Axtarış..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
