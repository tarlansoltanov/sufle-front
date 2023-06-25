import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cs from 'classnames';

import { IShop } from '../../types';
import { getMainShop } from '../../api';

import Container from '../Container/Container';

import styles from './Footer.module.scss';

const Footer = () => {
  const [shop, setShop] = useState<IShop | null>(null);

  useEffect(() => {
    getMainShop().then((data) => setShop(data));
  }, []);

  return (
    <footer className={styles.footer}>
      <Container>
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
                <li>
                  <a href="#">Tortlar</a>
                </li>

                <li>
                  <a href="#">Donuts</a>
                </li>

                <li>
                  <a href="#">Ekler</a>
                </li>

                <li>
                  <a href="#">Bulka & Qoğal</a>
                </li>

                <li>
                  <a href="#">Paxlavalar</a>
                </li>

                <li>
                  <a href="#">For Kids</a>
                </li>
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
                    <img src="/src/assets/images/icons/app_store.svg" alt="App Store" />
                  </a>

                  <a href="#">
                    <img src="/src/assets/images/icons/play_store.svg" alt="Play Store" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr />

        <div className={cs(styles.widget, styles.footnote)}>
          <div className={styles.copyright}>
            <img src="/src/assets/images/icons/copyright.svg" alt="Copyright" />
            <h2>Bütün hüquqlar qorunur</h2>
          </div>

          <div className={styles.social}>
            <a href="#">
              <img src="/src/assets/images/icons/facebook.svg" alt="Facebook" />
            </a>

            <a href="#">
              <img src="/src/assets/images/icons/twitter.svg" alt="Twitter" />
            </a>

            <a href="#">
              <img src="/src/assets/images/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
