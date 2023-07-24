import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Import External Libraries
import cs from "classnames";

// Import Components
import Container from "src/components/Container";

// Import Images
import {
  AppStoreIcon,
  PlayStoreIcon,
  InstagramIconGrey,
  FacebookIconGrey,
  CopyrightIcon,
} from "src/assets/images/icons";

// Import Styles
import styles from "./styles.module.scss";

import { IShop, IMainCategory } from "src/types";
import { getMainShop, getMainCategories } from "src/api";

const Footer = () => {
  const [shop, setShop] = useState<IShop | null>(null);
  const [categories, setCategories] = useState<IMainCategory[]>([]);

  useEffect(() => {
    getMainShop().then((data) => setShop(data));
    getMainCategories().then((data) => setCategories(data));
  }, []);

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <hr />

        <section className={styles.widgetSection}>
          <div className={styles.widget}>
            <h2 className={styles.title}>Sufle Cake House</h2>

            <div className={styles.content}>
              <ul>
                <li>
                  <NavLink to="/products">Məhsullar</NavLink>
                </li>

                <li>
                  <NavLink to="/shops">Mağazalarımız</NavLink>
                </li>

                <li>
                  <NavLink to="/gallery">Qalereya</NavLink>
                </li>

                <li>
                  <NavLink to="/about">Haqqımızda</NavLink>
                </li>

                <li>
                  <NavLink to="/contact">Əlaqə</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.widget}>
            <h2 className={styles.title}>Məhsullar</h2>

            <div className={styles.content}>
              <ul>
                {categories &&
                  categories.map((category) => (
                    <li key={category.id}>
                      <NavLink to={`/products?categories=${category.id}`}>{category.name}</NavLink>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className={cs(styles.widget, styles.contact)}>
            <h2 className={styles.title}>Əlaqə</h2>

            <div className={styles.content}>
              <ul>
                <li>
                  <span>{shop?.address}</span>
                </li>

                <li>
                  <span>{shop?.phone}</span>
                </li>

                <li>
                  <span>{shop?.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={cs(styles.widget, styles.appBox)}>
            <h2 className={styles.title}>Mobil tətbiqimizi yükləyin</h2>

            <div className={styles.content}>
              <ul>
                <li>
                  <a href="#">
                    <img src={AppStoreIcon} alt="App Store" />
                  </a>

                  <a href="#">
                    <img src={PlayStoreIcon} alt="Play Store" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr />

        <div className={cs(styles.widget, styles.footnote)}>
          <div className={styles.copyright}>
            <img src={CopyrightIcon} alt="Copyright" />
            <h2>Bütün hüquqlar qorunur</h2>
          </div>

          <div className={styles.social}>
            <a href="#">
              <img src={FacebookIconGrey} alt="Facebook" />
            </a>

            <a href="#">
              <img src={InstagramIconGrey} alt="Instagram" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
