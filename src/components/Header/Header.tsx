import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.menuBtn}>
          <img src="/src/assets/images/icons/menu.svg" alt="Menu" />
        </button>

        <img className={styles.logo} src="/src/assets/images/logo.png" alt="Sufle" />

        <nav className={styles.nav}>
          <ul>
            <li className={styles.active}>
              <a href="#">Ana Səhifə</a>
            </li>
            <li>
              <a href="#">Məhsullar</a>
            </li>
            <li>
              <a href="#">Qalereya</a>
            </li>
            <li>
              <a href="#">Mağazalarımız</a>
            </li>
            <li>
              <a href="#">Haqqımızda</a>
            </li>
            <li>
              <a href="#">Əlaqə</a>
            </li>
            <li>
              <a href="#">Vakansiya</a>
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
}

export default Header;
