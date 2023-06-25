import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import { IProduct } from '../../types';
import { getProductDetails } from '../../api';

import Error from '../errors';

import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import Loader from '../../components/Loader/Loader';

import styles from './Product.module.scss';
import './image-gallery.css';

const Product = () => {
  const { id } = useParams();

  // Product Details

  const [product, setProduct] = useState<IProduct | null>(null);
  const [status, setStatus] = useState<number | null>(null);

  useEffect(() => {
    getProductDetails(Number(id))
      .then((data) => setProduct(data))
      .catch((resp) => {
        setStatus(resp.status);
      });
  }, [id]);

  // Image Gallery

  const imageGalleryRef = useRef<any>(null);

  const onClickHandler = () => {
    imageGalleryRef.current.toggleFullScreen();
  };

  // Error or Loader

  if (product === null) {
    if (status !== null) {
      return <Error error_code={status} />;
    }
    return <Loader />;
  }

  return (
    <main>
      <Title title={product.name} subtitle={product.category.name} />

      <Container>
        <div className={styles.product}>
          <div className={styles.photo}>
            <ImageGallery
              items={
                product.images.map((image) => ({
                  original: image.image,
                  thumbnail: image.image,
                })) || []
              }
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
              {product.discount > 0 && <p className={styles.oldPrice}>{product.price} AZN</p>}
              <p className={styles.currentPrice}>
                {product.price * ((100 - product.discount) / 100)} AZN
              </p>
              {product.discount > 0 && <p className={styles.discount}>{product.discount}%</p>}
            </div>

            <div className={styles.title}>
              <h1>{product.name}</h1>
            </div>

            <div className={styles.description}>
              <p>{product.ingredients}</p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Product;
