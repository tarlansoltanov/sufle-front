import { useState, useEffect } from 'react';
import cs from 'classnames';

import { IShop } from '../../types';
import { getAllShops } from '../../api';

import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';

import styles from './Shops.module.scss';

const Shops = () => {
  const [shops, setShops] = useState<IShop[]>([]);

  useEffect(() => {
    getAllShops().then((data) => setShops(data || []));
  }, []);

  return (
    <main>
      <Title title="Mağazalarımız" subtitle="Mağazalarımız" />

      <Container>
        <div className={styles.wrapper}>
          {shops &&
            shops.map((shop: IShop) => (
              <div className={styles.box} key={shop.id}>
                <div className={styles.title}>
                  <h1>{shop.name}</h1>
                </div>

                <div className={styles.content}>
                  <div className={styles.widget}>
                    <h2>Ünvan</h2>
                    <p>{shop.address}</p>
                  </div>

                  <div className={styles.widget}>
                    <h2>İş Saatları</h2>
                    <p>{shop.working_hours}</p>
                  </div>

                  <div className={styles.widget}>
                    <h2>Əlaqə</h2>
                    <p>Telefon: {shop.phone}</p>
                    {shop.email && <p>Email: {shop.email}</p>}
                  </div>

                  <div className={cs(styles.widget, styles.mapsUrl)}>
                    <a href={shop.map_url} target="_blank">
                      Google map-a keçid
                    </a>
                  </div>
                </div>

                <div className={styles.media}>
                  <div className={styles.photo}>
                    <div className={styles.overlay}></div>
                    <img src={shop.photo} alt={shop.name} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </main>
  );
};

export default Shops;
