import cs from "classnames";
import { useState, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useNavigate, useSearchParams } from "react-router-dom";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

import { IPaginatedProducts, IMainCategory, IFilterProps } from "../../types";
import { getMainCategories, getProductsByFilter } from "../../api";

import {
  AllIconGrey,
  AllIconWhite,
  CloseIcon,
  DropdownIcon,
  FilterIconWhite,
  SortIcon,
} from "../../assets/images/icons";

import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Selector from "../../components/Selector/Selector";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

import styles from "./Products.module.scss";
import "./range-slider.css";

const Products = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState<boolean>(true);

  // Pagination

  const [page, setPage] = useState<number>(Number(searchParams.get("page")) || 1);

  const changePage = (page: number) => {
    setLoading(true);

    getProductsByFilter({ page }, filter)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setPage(page);

    navigate(
      `/products?${
        filter.categories.length > 0 ? `categories=${filter.categories.join(",")}` : ""
      }&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}&${
        filter.ordering ? `sort=${filter.ordering}` : ""
      }&page=${page}`
    );

    setLoading(false);
  };

  // Filter and Sort
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [sortOpen, setSortOpen] = useState<boolean>(false);

  const [filter, setFilter] = useState<IFilterProps>({
    categories:
      searchParams
        .get("categories")
        ?.split(",")
        .map((item: string) => Number(item)) || [],
    minPrice: Number(searchParams.get("minPrice")) || 0,
    maxPrice: Number(searchParams.get("maxPrice")) || 100,
    ordering: searchParams.get("sort") || "",
    search: searchParams.get("search") || "",
  });

  const sortingOptions = [
    { value: "", label: "Ən Yenilər" },
    { value: "-views", label: "Ən Popular" },
    { value: "price", label: "Ən Aşağı Qiymət" },
    { value: "-price", label: "Ən Yuxarı Qiymət" },
    { value: "-discount", label: "Endirimdə olanlar" },
  ];

  const filterProducts = () => {
    setLoading(true);

    getProductsByFilter({}, filter)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate(
      `/products?${
        filter.categories.length > 0 ? `categories=${filter.categories.join(",")}&` : ""
      }${filter.minPrice > 0 ? `minPrice=${filter.minPrice}&` : ""}${
        filter.maxPrice < 100 ? `maxPrice=${filter.maxPrice}&` : ""
      }${filter.ordering ? `sort=${filter.ordering}&` : ""}${
        filter.search ? `search=${filter.search}` : ""
      }`
    );

    setLoading(false);
  };

  const handleSortClick = (value: string) => {
    setFilter({ ...filter, ordering: value });
  };

  // Price Range Filter

  const handlePriceChange = (result: ChangeResult) => {
    setFilter({ ...filter, minPrice: result.minValue, maxPrice: result.maxValue });
  };

  const handlePriceInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    if (target.name === "min") {
      setFilter({ ...filter, minPrice: Number(target.value) });
    } else if (target.name === "max") {
      setFilter({ ...filter, maxPrice: Number(target.value) });
    }
  };

  // Category Filter

  const handleCategoryFilterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.parentElement?.classList.toggle(styles.active);
  };

  const handleCategoryClick = (category_id: number | null) => {
    if (!category_id) {
      setFilter({ ...filter, categories: [] });
      return;
    }

    if (filter.categories.includes(category_id)) {
      setFilter({
        ...filter,
        categories: filter.categories.filter((item) => item !== category_id),
      });
    } else {
      setFilter({ ...filter, categories: [...filter.categories, category_id] });
      document.getElementById(`f-${category_id}`)?.classList.add(styles.active);
    }
  };

  // Categories

  const [categories, setCategories] = useState<IMainCategory[]>([]);

  // Products

  const [products, setProducts] = useState<IPaginatedProducts>();

  useEffect(() => {
    getMainCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  }, []);

  useEffect(() => {
    filterProducts();
    
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    );
  }, [filter]);

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

              <img src={FilterIconWhite} alt="Filter" />
            </button>

            <button className={cs(styles.sortBtn)} onClick={() => setSortOpen(!sortOpen)}>
              <p>Sıralama</p>

              <img src={SortIcon} alt="Sort" />
            </button>
          </div>

          <section className={cs(styles.filter, { [styles.filterOpen]: filterOpen })}>
            <div className={styles.filterHeader}>
              <h1>Filtr</h1>

              <button className={styles.closeBtn} onClick={() => setFilterOpen(!filterOpen)}>
                <img src={CloseIcon} alt="Close" />
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
                  {categories &&
                    categories.map((category) => (
                      <li key={category.id} id={`f-${category.id}`}>
                        <div className={styles.mainCategory} onClick={handleCategoryFilterClick}>
                          <div className={styles.icon}>
                            <img src={category.logo.red} alt={category.name} />
                          </div>

                          <p>{category.name}</p>

                          <img src={DropdownIcon} alt="Dropdown" className={styles.dropdown} />
                        </div>

                        <ul className={styles.subCategories}>
                          <li>
                            <input
                              type="checkbox"
                              name={String(category.id)}
                              id={String(category.id)}
                              checked={filter.categories.includes(category.id)}
                              onChange={() => handleCategoryClick(category.id)}
                            />
                            <label htmlFor="all">Bütün {category.name}</label>
                          </li>

                          {category.sub_categories &&
                            category.sub_categories.map((sub) => (
                              <li key={sub.id}>
                                <input
                                  type="checkbox"
                                  name={String(sub.id)}
                                  id={String(sub.id)}
                                  checked={filter.categories.includes(sub.id)}
                                  onChange={() => handleCategoryClick(sub.id)}
                                />
                                <label htmlFor={String(sub.id)}>{sub.name}</label>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
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
                  minValue={filter.minPrice}
                  maxValue={filter.maxPrice}
                  onChange={handlePriceChange}
                  label={false}
                  ruler={false}
                  className="rangeSlider"
                />

                <div className={styles.range}>
                  <input
                    type="number"
                    name="min"
                    value={filter.minPrice}
                    onInput={handlePriceInput}
                  />
                  <input
                    type="number"
                    name="max"
                    value={filter.maxPrice}
                    onInput={handlePriceInput}
                  />
                </div>
              </div>
            </div>

            <button className={styles.submitBtn} onClick={() => setFilterOpen(false)}>
              Tətbiq et
            </button>
          </section>

          <section className={styles.main}>
            <div className={styles.ordering}>
              <ScrollContainer className={styles.categories} ignoreElements={"div"}>
                <Selector
                  title={"Hamısı"}
                  icon={{
                    grey: AllIconGrey,
                    white: AllIconWhite,
                  }}
                  isSelected={filter.categories.length === 0}
                  onClick={() => {
                    handleCategoryClick(null);
                  }}
                  className={styles.selector}
                />
                {categories &&
                  categories.map((category) => (
                    <Selector
                      key={category.id}
                      title={category.name}
                      icon={category.logo}
                      isSelected={filter.categories.includes(category.id)}
                      onClick={() => {
                        handleCategoryClick(category.id);
                      }}
                      className={styles.selector}
                    />
                  ))}
              </ScrollContainer>

              <div className={cs(styles.sort, { [styles.sortOpen]: sortOpen })}>
                <button onClick={() => setSortOpen(!sortOpen)}>
                  <span>
                    <p>
                      {sortingOptions.find((option) => option.value === filter.ordering)?.label}
                    </p>
                    <img src={SortIcon} alt="Sort" />
                  </span>
                </button>

                <ul>
                  <li className={styles.sortHeader}>
                    <h1>Sıralama</h1>

                    <button className={styles.closeBtn} onClick={() => setSortOpen(!sortOpen)}>
                      <img src={CloseIcon} alt="Close" />
                    </button>
                  </li>

                  {sortingOptions.map((option, index) => (
                    <li
                      key={index}
                      className={cs({ [styles.active]: filter.ordering === option.value })}
                      onClick={() => handleSortClick(option.value)}
                    >
                      <a>{option.label}</a>
                    </li>
                  ))}
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
                          photos={product.images}
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
                  {products && products.previous ? (
                    <>
                      <a className={styles.pageBtn} onClick={() => changePage(page - 1)}>
                        {"<"}
                      </a>
                      <a className={styles.pageBtn} onClick={() => changePage(page + 1)}>
                        {page - 1}
                      </a>
                    </>
                  ) : null}
                  {products && products.count > 0 ? (
                    <a className={cs(styles.current, styles.pageBtn)}>{page}</a>
                  ) : null}
                  {products && products.previous ? (
                    <>
                      <a className={styles.pageBtn} onClick={() => changePage(page + 1)}>
                        {page + 1}
                      </a>
                      <a className={styles.pageBtn} onClick={() => changePage(page + 1)}>
                        {"<"}
                      </a>
                    </>
                  ) : null}
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
