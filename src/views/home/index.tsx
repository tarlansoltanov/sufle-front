import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';

import { IMainCategory, IPaginatedProducts } from '../../types';
import { getMainCategories, getAllProducts, getProductsByCategory } from '../../api';

import Container from '../../components/Container/Container';
import Selector from '../../components/Selector/Selector';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';

import styles from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

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
        <div className={styles.promotions}></div>
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
