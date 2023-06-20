import { useState } from 'react';
import cs from 'classnames';

import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';

import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';

import styles from './Products.module.scss';
import './range-slider.css';

const Products = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

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
          </section>
        </div>
      </Container>
    </main>
  );
};

export default Products;
