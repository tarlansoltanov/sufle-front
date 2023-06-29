import cs from 'classnames';
import { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Link, useNavigate } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';

import { IMainCategory, IPaginatedProducts } from '../../types';
import { getMainCategories, getProductsByCategory, getProductsByPromo } from '../../api';

import Container from '../../components/Container/Container';
import Selector from '../../components/Selector/Selector';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';

import styles from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  // Promotions

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const promotionOptions = [
    {
      label: 'Yeni Gələnlər',
      value: 'new',
      icons: {
        grey: '/src/assets/images/icons/newGrey.svg',
        white: '/src/assets/images/icons/newWhite.svg',
      },
    },
    {
      label: 'Endirimdə olanlar',
      value: 'discount',
      icons: {
        grey: '/src/assets/images/icons/discountGrey.svg',
        white: '/src/assets/images/icons/discountWhite.svg',
      },
    },
  ];

  const [promotions, setPromotions] = useState<IPaginatedProducts | null>(null);
  const [selectedPromotion, setSelectedPromotion] = useState<string>('new');

  useEffect(() => {
    setLoading(true);

    getProductsByPromo(
      { limit: 8 },
      { isNew: selectedPromotion === 'new', discount: selectedPromotion === 'discount' }
    )
      .then((data) => setPromotions(data))
      .catch((err) => console.log(err));

    setLoading(false);
  }, [selectedPromotion]);

  // Categories

  const [categories, setCategories] = useState<IMainCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<IMainCategory | null>(null);

  useEffect(() => {
    getMainCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));

    setLoading(false);
  }, []);

  // Products

  const [products, setProducts] = useState<IPaginatedProducts | null>();

  useEffect(() => {
    setLoading(true);

    getProductsByCategory({ limit: 8 }, selectedCategory)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));

    setLoading(false);
  }, [selectedCategory]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      window.innerWidth - document.documentElement.clientWidth + 'px'
    );
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <main>
      <Container>
        <div className={styles.banner}></div>
        <div className={styles.promotions}>
          <div className={styles.header}>
            <div className={styles.title}>
              <div className={styles.subtitle}>
                <hr />
                <h2>
                  {promotionOptions.find((option) => option.value === selectedPromotion)?.label}
                </h2>
              </div>
              <h1>
                {promotionOptions.find((option) => option.value === selectedPromotion)?.label}
              </h1>
            </div>

            <ScrollContainer className={styles.selections}>
              {promotionOptions.map((option, index) => (
                <Selector
                  key={index}
                  title={option.label}
                  icon={option.icons}
                  isSelected={selectedPromotion === option.value}
                  onClick={() => {
                    setSelectedPromotion(option.value);
                  }}
                  className={styles.selector}
                />
              ))}
            </ScrollContainer>

            <div className={styles.sliderBtns}>
              <Selector
                title={''}
                icon={{
                  grey: '/src/assets/images/icons/arrowLeft.svg',
                  white: '/src/assets/images/icons/arrowLeft.svg',
                }}
                isSelected={false}
                onClick={() => setActiveItemIndex(activeItemIndex - 1)}
                className={cs(styles.prevBtn, styles.btn)}
              />

              <Selector
                title={''}
                icon={{
                  grey: '/src/assets/images/icons/arrowRight.svg',
                  white: '/src/assets/images/icons/arrowRight.svg',
                }}
                isSelected={true}
                onClick={() => setActiveItemIndex(activeItemIndex + 1)}
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
              gutter={window.innerWidth > 1024
                ? 40
                : window.innerWidth > 768
                ? 20
                : window.innerWidth > 320
                ? 10
                : 0}
              chevronWidth={0}
              classes={{
                wrapper: styles.wrapper,
                itemsWrapper: styles.itemsWrapper,
                itemsInnerWrapper: styles.itemsInnerWrapper,
                itemWrapper: styles.itemWrapper,
              }}
            >
              {promotions &&
                (promotions.results.length == 0 ? (
                  <p className={styles.empty}>Məhsul tapılmadı</p>
                ) : (
                  promotions.results.map((product) => (
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
        <div className={styles.products}>
          <div className={styles.header}>
            <div className={styles.title}>
              <div className={styles.subtitle}>
                <hr />
                <h2>Məhsullar</h2>
              </div>
              <h1>Məhsullar</h1>
            </div>

            <ScrollContainer className={styles.categories}>
              <Selector
                title={'Hamısı'}
                icon={{
                  grey: '/src/assets/images/icons/allGrey.svg',
                  white: '/src/assets/images/icons/allWhite.svg',
                }}
                isSelected={selectedCategory === null}
                onClick={() => setSelectedCategory(null)}
                className={styles.selector}
              />
              {categories &&
                categories.map((category) => (
                  <Selector
                    key={category.id}
                    title={category.name}
                    icon={category.logo}
                    isSelected={selectedCategory?.id === category.id}
                    onClick={() => setSelectedCategory(category)}
                    className={styles.selector}
                  />
                ))}
            </ScrollContainer>

            <Link to="/products" className={styles.viewAll}>
              <span>Hamısı</span>
              <img src="/src/assets/images/icons/arrow-L.svg" alt="Arrow Left" />
            </Link>
          </div>
          <div className={styles.main}>
            {products &&
              (products.results.length == 0 ? (
                <p className={styles.empty}>Məhsul tapılmadı</p>
              ) : (
                products.results.map((product) => (
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
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
