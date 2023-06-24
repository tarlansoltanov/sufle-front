import ImageGallery from 'react-image-gallery';
import { useRef } from 'react';

import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';

import styles from './Product.module.scss';
import './image-gallery.css';

const Product = () => {
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
        </div>
      </Container>
    </main>
  );
};

export default Product;
