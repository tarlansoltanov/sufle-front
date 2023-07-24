import { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";

// Import External Libraries
import cs from "classnames";

// Import Components
import Container from "src/components/Container";

// Import Images
import { Logo } from "src/assets/images";
import {
  MenuIcon,
  CloseIcon,
  ArrowIcon,
  FacebookIconRed,
  InstagramIconRed,
  SearchIcon,
} from "src/assets/images/icons";

// Import Styles
import styles from "./styles.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <button className={styles.openBtn} onClick={() => setMenuOpen(!menuOpen)}>
          <img src={MenuIcon} alt="Menu" />
        </button>

        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Sufle" />
        </Link>

        <nav className={cs(styles.nav, { [styles.navOpen]: menuOpen })}>
          <div className={styles.navHeader}></div>

          <ul>
            <li className={styles.navHeader}>
              <Link to="/">
                <img className={styles.navLogo} src={Logo} alt="Sufle" />
              </Link>

              <button className={styles.closeBtn} onClick={() => setMenuOpen(!menuOpen)}>
                <img src={CloseIcon} alt="Close" />
              </button>
            </li>

            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
                Ana Səhifə
                <img src={ArrowIcon} alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? styles.active : "")}>
                Məhsullar
                <img src={ArrowIcon} alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? styles.active : "")}>
                Qalereya
                <img src={ArrowIcon} alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/shops" className={({ isActive }) => (isActive ? styles.active : "")}>
                Mağazalarımız
                <img src={ArrowIcon} alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
                Haqqımızda
                <img src={ArrowIcon} alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : "")}>
                Əlaqə
                <img src={ArrowIcon} alt="Arrow" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/vacancy" className={({ isActive }) => (isActive ? styles.active : "")}>
                Vakansiya
                <img src={ArrowIcon} alt="Arrow" />
              </NavLink>
            </li>

            <li></li>

            <li className={styles.navFooter}>
              <a href="#">
                <img src={FacebookIconRed} alt="Facebook" />
              </a>

              <a href="#">
                <img src={InstagramIconRed} alt="Instagram" />
              </a>
            </li>
          </ul>
        </nav>

        <form method="GET" action="/products">
          <div className={cs(styles.search, { [styles.openSearch]: isSearchOpen })}>
            <img
              src={SearchIcon}
              alt="Search"
              className={styles.searchIcon}
              onClick={() => {
                setSearchOpen(!isSearchOpen);
              }}
            />

            <input name="search" type="text" placeholder="Axtarış..." />

            <img
              src={CloseIcon}
              alt="Close"
              className={styles.closeSearch}
              onClick={() => {
                setSearchOpen(!isSearchOpen);
              }}
            />
          </div>
        </form>
      </Container>
    </header>
  );
};

export default Header;
