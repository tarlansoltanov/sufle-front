import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';

import { IMainCategory } from '../../types';
import { getMainCategories } from '../../api';

import Container from '../../components/Container/Container';
import Selector from '../../components/Selector/Selector';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';

import styles from './Home.module.scss';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [categories, setCategories] = useState<IMainCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<IMainCategory | null>(null);

  useEffect(() => {
    getMainCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));

    setLoading(false);
  }, []);

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
              {categories &&
                categories.map((category) => (
                  <Selector
                    title={category.name}
                    icon={category.logo}
                    isSelected={selectedCategory?.id === category.id}
                    onClick={() => {
                      setSelectedCategory(category);
                    }}
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
            <Card
              photo="/src/assets/images/product/product2.jpg"
              name="Karamelli Tort"
              price={30.0}
              photoClass={styles.photo}
            />
            <Card
              photo="/src/assets/images/product/product2.jpg"
              name="Karamelli Tort"
              price={30.0}
              photoClass={styles.photo}
            />
            <Card
              photo="/src/assets/images/product/product2.jpg"
              name="Karamelli Tort"
              price={30.0}
              photoClass={styles.photo}
            />
            <Card
              photo="/src/assets/images/product/product1.png"
              name="Karamelli Tort"
              price={30.0}
              photoClass={styles.photo}
            />
            <Card
              photo="/src/assets/images/product/product1.png"
              name="Karamelli Tort"
              price={30.0}
              photoClass={styles.photo}
            />
            <Card
              photo="/src/assets/images/product/product1.png"
              name="Karamelli Tort"
              price={30.0}
              photoClass={styles.photo}
            />
            <Card
              photo="/src/assets/images/product/product1.png"
              name="Karamelli Tort"
              price={30.0}
              photoClass={styles.photo}
            />
            <Card
              photo="/src/assets/images/product/product1.png"
              name="Karamelli Tort"
              price={30.0}
              photoClass={styles.photo}
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
