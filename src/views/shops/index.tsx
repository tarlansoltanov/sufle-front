import cs from 'classnames';

import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';

import styles from './Shops.module.scss';

const Shops = () => {
  return (
    <main className={styles.main}>
      <Title title="Mağazalarımız" subtitle="Mağazalarımız" />
      
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.title}>
              <h1>Sumqayıt filialı 1</h1>
            </div>

            <div className={styles.content}>
              <div className={styles.widget}>
                <h2>Ünvan</h2>
                <p>Sumqaıt şəhəri, 18-ci mkr dairəsi 2465A-2287</p>
              </div>

              <div className={styles.widget}>
                <h2>İş Saatları</h2>
                <p>Bazar ertəsi - Bazar: 09:00-21:00</p>
              </div>

              <div className={styles.widget}>
                <h2>Əlaqə</h2>
                <p>Telefon: 018 65 11 22 33</p>
                <p>Email: info@sufle.com</p>
              </div>

              <div className={cs(styles.widget, styles.mapsUrl)}>
                <a href="https://maps.google.com" target="_blank">
                  Google map-a keçid
                </a>
              </div>
            </div>

            <div className={styles.media}>
              <div className={styles.photo}>
                <div className={styles.overlay}></div>
                <img src="/src/assets/images/shop/shop1.png" alt="Sumqayıt filialı" />
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.title}>
              <h1>Sumqayıt filialı 1</h1>
            </div>

            <div className={styles.content}>
              <div className={styles.widget}>
                <h2>Ünvan</h2>
                <p>Sumqaıt şəhəri, 18-ci mkr dairəsi 2465A-2287</p>
              </div>

              <div className={styles.widget}>
                <h2>İş Saatları</h2>
                <p>Bazar ertəsi - Bazar: 09:00-21:00</p>
              </div>

              <div className={styles.widget}>
                <h2>Əlaqə</h2>
                <p>Telefon: 018 65 11 22 33</p>
                <p>Email: info@sufle.com</p>
              </div>

              <div className={cs(styles.widget, styles.mapsUrl)}>
                <a href="https://maps.google.com" target="_blank">
                  Google map-a keçid
                </a>
              </div>
            </div>

            <div className={styles.media}>
              <div className={styles.photo}>
                <div className={styles.overlay}></div>
                <img src="/src/assets/images/shop/shop1.png" alt="Sumqayıt filialı" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Shops;
