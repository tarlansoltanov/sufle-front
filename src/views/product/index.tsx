import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { useRef } from 'react';

import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';

import styles from './Product.module.scss';
import './image-gallery.css';

const Product = () => {
  const { id } = useParams();

  const imageGalleryRef = useRef<any>(null);

  const onClickHandler = () => {
    imageGalleryRef.current.toggleFullScreen();
  };

  const images = [
    {
      original: '/src/assets/images/product/product1.jpg',
      thumbnail: '/src/assets/images/product/product1.jpg',
      bulletClass: 'bullet',
    },
    {
      original: '/src/assets/images/product/product2.jpg',
      thumbnail: '/src/assets/images/product/product2.jpg',
      bulletClass: 'bullet',
    },
  ];

  return (
    <main>
      <Title title="Məhsul detalları" subtitle="Məhsul detalları" />

      <Container>
        <div className={styles.product}>
          <div className={styles.photo}>
            <ImageGallery
              items={images}
              showNav={false}
              showThumbnails={false}
              showBullets={true}
              useBrowserFullscreen={false}
              showPlayButton={false}
              showFullscreenButton={false}
              ref={imageGalleryRef}
              onClick={onClickHandler}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.price}>
              <p className={styles.oldPrice}>20.00 AZN</p>
              <p className={styles.currentPrice}>{20.0 * ((100 - 10) / 100)} AZN</p>
              <p className={styles.discount}>10%</p>
            </div>
            <div className={styles.title}>
              <h1>Karamelli Tort</h1>
            </div>
            <div className={styles.description}>
              <p>
                Un, yumurta, şəkər tozu, qara şokolad, bitki əsaslı qaymaq, fəsilə uyğun meyvələr,
                manqo ətri, albalı jelesi, qabartma tozu, vanil tozu, jelatin, jele, emulqator, su.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Product;
