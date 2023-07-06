import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import ItemsCarousel from 'react-items-carousel';
import cs from 'classnames';

import { IProduct } from '../../types';
import { getProductDetails, getProductsByCategory } from '../../api';

import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/images/icons';

import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import Selector from '../../components/Selector/Selector';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import ErrorPage from '../errors';

import styles from './Product.module.scss';
import './image-gallery.css';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  // Related Products

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (product === null) return;
    getProductsByCategory({}, product.category)
      .then((data) => setRelatedProducts(data.results))
      .catch((resp) => {
        setStatus(resp.status);
      });

    document.documentElement.style.setProperty(
      '--scrollbar-width',
      window.innerWidth - document.documentElement.clientWidth + 'px'
    );
  }, [product]);

  // Error or Loader

  if (product === null) {
    if (status !== null) {
      return <ErrorPage error_code={status} />;
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

        <div className={styles.relatedProducts}>
          <div className={styles.header}>
            <div className={styles.title}>
              <div className={styles.subtitle}>
                <hr />
                <h2>Digər Məhsullar</h2>
              </div>
              <h1>Digər Məhsullar</h1>
            </div>

            <div className={styles.sliderBtns}>
              <Selector
                title={''}
                icon={{
                  grey: ArrowLeftIcon,
                  white: ArrowLeftIcon,
                }}
                isSelected={false}
                onClick={() => {
                  if (activeItemIndex > 0) setActiveItemIndex(activeItemIndex - 1);
                }}
                className={cs(styles.prevBtn, styles.btn)}
              />

              <Selector
                title={''}
                icon={{
                  grey: ArrowRightIcon,
                  white: ArrowRightIcon,
                }}
                isSelected={true}
                onClick={() => {
                  if (activeItemIndex + 4 < relatedProducts.length)
                    setActiveItemIndex(activeItemIndex + 1);
                }}
                className={styles.btn}
              />
            </div>
          </div>
          <div className={styles.main}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={
                window.innerWidth > 1280
                  ? 4
                  : window.innerWidth > 1024
                  ? 3
                  : window.innerWidth > 768
                  ? 2
                  : window.innerWidth > 480
                  ? 3
                  : window.innerWidth > 320
                  ? 2
                  : 1
              }
              activePosition={'left'}
              gutter={
                window.innerWidth > 1024
                  ? 40
                  : window.innerWidth > 768
                  ? 20
                  : window.innerWidth > 320
                  ? 10
                  : 0
              }
              chevronWidth={0}
              classes={{
                wrapper: styles.wrapper,
                itemsWrapper: styles.itemsWrapper,
                itemsInnerWrapper: styles.itemsInnerWrapper,
                itemWrapper: styles.itemWrapper,
              }}
            >
              {relatedProducts &&
                (relatedProducts.length == 0 ? (
                  <p className={styles.empty}>Məhsul tapılmadı</p>
                ) : (
                  relatedProducts.map((product) => (
                    <Card
                      key={product.id}
                      photos={product.images}
                      name={product.name}
                      price={product.price}
                      photoClass={styles.photo}
                      className={styles.card}
                      onClick={() => {
                        navigate(`/products/${product.id}`);
                      }}
                      isNew={product.is_new}
                      discount={product.discount}
                    />
                  ))
                ))}
            </ItemsCarousel>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Product;
