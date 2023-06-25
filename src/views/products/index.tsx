import cs from 'classnames';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPaginatedProducts } from '../../types';
import { getAllProducts } from '../../api';

import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import ScrollContainer from 'react-indiana-drag-scroll';

import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import Selector from '../../components/Selector/Selector';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

import styles from './Products.module.scss';
import './range-slider.css';

const Products = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);

  // Filter and Sort
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [sortOpen, setSortOpen] = useState<boolean>(false);

  // Price Range Filter

  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(100);

  const handlePriceChange = (result: ChangeResult) => {
    setMinValue(result.minValue);
    setMaxValue(result.maxValue);
  };

  const handlePriceInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    if (target.name === 'min') {
      setMinValue(Number(target.value));
    } else if (target.name === 'max') {
      setMaxValue(Number(target.value));
    }
  };

  // Category Filter

  const handleCategoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.parentElement?.classList.toggle(styles.active);
  };

  // Products

  const [products, setProducts] = useState<IPaginatedProducts>();

  useEffect(() => {
    getAllProducts({}).then((res) => {
      setProducts(res);
      console.log(res);
    });

    setLoading(false);
  }, []);

  return (
    <main>
      <Title title="Məhsullar" subtitle="Məhsullar" />

      <Container>
        <div className={styles.wrapper}>
          <div className={styles.openBtns}>
            <button
              className={cs(styles.filterBtn, styles.active)}
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <p>Filtr</p>

              <img src="/src/assets/images/icons/filter.svg" alt="Filter" />
            </button>

            <button className={cs(styles.sortBtn)} onClick={() => setSortOpen(!sortOpen)}>
              <p>Sıralama</p>

              <img src="/src/assets/images/icons/sort.svg" alt="Sort" />
            </button>
          </div>

          <section className={cs(styles.filter, { [styles.filterOpen]: filterOpen })}>
            <div className={styles.filterHeader}>
              <h1>Filtr</h1>

              <button className={styles.closeBtn} onClick={() => setFilterOpen(!filterOpen)}>
                <img src="/src/assets/images/icons/close.svg" alt="Close" />
              </button>
            </div>

            <div className={cs(styles.filterItem, styles.type)}>
              <div className={styles.title}>
                <div className={styles.subtitle}>
                  <hr />
                  <p>Məhsulun Növü</p>
                </div>
                <h1>Məhsulun Növü</h1>
              </div>

              <div className={styles.content}>
                <ul>
                  <li>
                    <div className={styles.mainCategory} onClick={handleCategoryClick}>
                      <div className={styles.icon}>
                        <img src="/src/assets/images/category/cake.svg" alt="Tortlar" />
                      </div>

                      <p>Tortlar</p>

                      <img
                        src="/src/assets/images/icons/dropdown.svg"
                        alt="Dropdown"
                        className={styles.dropdown}
                      />
                    </div>

                    <ul className={styles.subCategories}>
                      <li>
                        <input type="checkbox" name="all" />
                        <label htmlFor="all">Bütün Tortlar</label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label htmlFor="">Ad Günü Tortları</label>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div className={styles.mainCategory} onClick={handleCategoryClick}>
                      <div className={styles.icon}>
                        <img src="/src/assets/images/category/ekler.svg" alt="Ekler" />
                      </div>

                      <p>Ekler</p>

                      <img
                        src="/src/assets/images/icons/dropdown.svg"
                        alt="Dropdown"
                        className={styles.dropdown}
                      />
                    </div>

                    <ul className={styles.subCategories}>
                      <li>
                        <input type="checkbox" name="all" />
                        <label htmlFor="all">Bütün Ekler</label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label htmlFor="">Ekler Sub</label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className={cs(styles.filterItem, styles.price)}>
              <div className={styles.title}>
                <div className={styles.subtitle}>
                  <hr />
                  <p>Qiymət</p>
                </div>

                <h1>Qiymət</h1>
              </div>

              <div className={styles.content}>
                <MultiRangeSlider
                  min={0}
                  max={100}
                  step={1}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={handlePriceChange}
                  label={false}
                  ruler={false}
                  className="rangeSlider"
                />

                <div className={styles.range}>
                  <input type="text" name="min" value={minValue} onInput={handlePriceInput} />
                  <input type="text" name="max" value={maxValue} onInput={handlePriceInput} />
                </div>
              </div>
            </div>

            <button className={styles.submitBtn}>Tətbiq et</button>
          </section>

          <section className={styles.main}>
            <div className={styles.ordering}>
              <ScrollContainer className={styles.categories}>
                <Selector
                  title="Tortlar"
                  icon="/src/assets/images/category/cake_white.svg"
                  isSelected={true}
                  onClick={() => {}}
                />
                <Selector
                  title="Donut"
                  icon="/src/assets/images/category/donut_grey.svg"
                  isSelected={false}
                  onClick={() => {}}
                />
                <Selector
                  title="Desertlər"
                  icon="/src/assets/images/category/dessert_grey.svg"
                  isSelected={false}
                  onClick={() => {}}
                />
                <Selector
                  title="Paxlavalar"
                  icon="/src/assets/images/category/paklava_grey.svg"
                  isSelected={false}
                  onClick={() => {}}
                />
                <Selector
                  title="For Kids"
                  icon="/src/assets/images/category/kids_grey.svg"
                  isSelected={false}
                  onClick={() => {}}
                />
                <Selector
                  title="Donut"
                  icon="/src/assets/images/category/donut_grey.svg"
                  isSelected={false}
                  onClick={() => {}}
                />
                <Selector
                  title="Desertlər"
                  icon="/src/assets/images/category/dessert_grey.svg"
                  isSelected={false}
                  onClick={() => {}}
                />
                <Selector
                  title="Paxlavalar"
                  icon="/src/assets/images/category/paklava_grey.svg"
                  isSelected={false}
                  onClick={() => {}}
                />
                <Selector
                  title="For Kids"
                  icon="/src/assets/images/category/kids_grey.svg"
                  isSelected={false}
                  onClick={() => {}}
                />
              </ScrollContainer>

              <div className={cs(styles.sort, { [styles.sortOpen]: sortOpen })}>
                <button onClick={() => setSortOpen(!sortOpen)}>
                  <span>
                    <p>Sıralama</p>
                    <img src="/src/assets/images/icons/sort.svg" alt="Sort" />
                  </span>
                </button>

                <ul>
                  <li className={styles.sortHeader}>
                    <h1>Sıralama</h1>

                    <button className={styles.closeBtn} onClick={() => setSortOpen(!sortOpen)}>
                      <img src="/src/assets/images/icons/close.svg" alt="Close" />
                    </button>
                  </li>

                  <li>
                    <a href="">Standart</a>
                  </li>
                  <li>
                    <a href="">Ən Yenilər</a>
                  </li>
                  <li>
                    <a href="">Ən Ucuz Qiymət</a>
                  </li>
                  <li>
                    <a href="">Ən Bahalı Qiymət</a>
                  </li>
                  <li>
                    <a href="">Endirimdə olanlar</a>
                  </li>
                </ul>
              </div>
            </div>

            {loading ? (
              <Loader />
            ) : (
              <>
                <div className={styles.products}>
                  {products &&
                    (products.results.length == 0 ? (
                      <p className={styles.noProduct}>Axtardığınız məhsul tapılmadı</p>
                    ) : (
                      products.results.map((product) => (
                        <Card
                          key={product.id}
                          photo={product.images[0].image}
                          name={product.name}
                          price={product.price}
                          photoClass={styles.photo}
                          onClick={() => {
                            navigate(`/products/${product.id}`);
                          }}
                          isNew={product.is_new}
                          discount={product.discount}
                        />
                      ))
                    ))}
                </div>
                <div className={styles.pagination}>
                  <a className={styles.pageBtn} href="">
                    {'<'}
                  </a>
                  <a className={cs(styles.current, styles.pageBtn)} href="#">
                    {'1'}
                  </a>
                  <a className={styles.pageBtn} href="#">
                    {'2'}
                  </a>
                  <a className={styles.pageBtn} href="#">
                    {'>'}
                  </a>
                </div>
              </>
            )}
          </section>
        </div>
      </Container>
    </main>
  );
};

export default Products;
