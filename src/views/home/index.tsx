import { Link } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';

import Container from '../../components/Container/Container';
import Selector from '../../components/Selector/Selector';
import Card from '../../components/Card/Card';

import styles from './Home.module.scss';

const Home = () => {
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
                title="Tortlar"
                icon="/src/assets/images/category/cake_white.svg"
                isSelected={true}
                onClick={() => {}}
                className={styles.selector}
              />
              <Selector
                title="Donut"
                icon="/src/assets/images/category/donut_grey.svg"
                isSelected={false}
                onClick={() => {}}
                className={styles.selector}
              />
              <Selector
                title="Desertlər"
                icon="/src/assets/images/category/dessert_grey.svg"
                isSelected={false}
                onClick={() => {}}
                className={styles.selector}
              />
              <Selector
                title="Paxlavalar"
                icon="/src/assets/images/category/paklava_grey.svg"
                isSelected={false}
                onClick={() => {}}
                className={styles.selector}
              />
              <Selector
                title="For Kids"
                icon="/src/assets/images/category/kids_grey.svg"
                isSelected={false}
                onClick={() => {}}
                className={styles.selector}
              />
              <Selector
                title="Donut"
                icon="/src/assets/images/category/donut_grey.svg"
                isSelected={false}
                onClick={() => {}}
                className={styles.selector}
              />
              <Selector
                title="Desertlər"
                icon="/src/assets/images/category/dessert_grey.svg"
                isSelected={false}
                onClick={() => {}}
                className={styles.selector}
              />
              <Selector
                title="Paxlavalar"
                icon="/src/assets/images/category/paklava_grey.svg"
                isSelected={false}
                onClick={() => {}}
                className={styles.selector}
              />
              <Selector
                title="For Kids"
                icon="/src/assets/images/category/kids_grey.svg"
                isSelected={false}
                onClick={() => {}}
                className={styles.selector}
              />
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
