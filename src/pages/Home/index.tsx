import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import External Libraries
import cs from "classnames";
import ItemsCarousel from "react-items-carousel";
import ScrollContainer from "react-indiana-drag-scroll";

// Import Components
import { Container, Loader, Selector, Card } from "src/components";

// Import Images
import {
  AllIconGrey,
  AllIconWhite,
  ArrowLeftIcon,
  ArrowLineIconRed,
  ArrowLineIconWhite,
  ArrowRightIcon,
  DiscountIconGrey,
  DiscountIconWhite,
  NewIconGrey,
  NewIconWhite,
} from "src/assets/images/icons";

// Import Styles
import styles from "./styles.module.scss";

import { IAdvert, IMainCategory, IPaginatedProducts } from "src/types";
import { getAdverts, getMainCategories, getProductsByCategory, getProductsByPromo } from "src/api";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  // Banner

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [adverts, setAdverts] = useState<IAdvert[]>([]);

  useEffect(() => {
    setLoading(true);

    getAdverts()
      .then((data) => setAdverts(data))
      .catch((err) => console.log(err));

    setLoading(false);
  }, []);

  // Promotions

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const promotionOptions = [
    {
      label: "Yeni Gələnlər",
      value: "new",
      icons: {
        grey: NewIconGrey,
        white: NewIconWhite,
      },
    },
    {
      label: "Endirimdə olanlar",
      value: "discount",
      icons: {
        grey: DiscountIconGrey,
        white: DiscountIconWhite,
      },
    },
  ];

  const [promotions, setPromotions] = useState<IPaginatedProducts | null>(null);
  const [selectedPromotion, setSelectedPromotion] = useState<string>("new");

  useEffect(() => {
    setLoading(true);

    getProductsByPromo(
      { limit: 8 },
      { isNew: selectedPromotion === "new", discount: selectedPromotion === "discount" }
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
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    );
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <main>
      <Container className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h1 className={styles.title}>Sufle Cake House</h1>
            <p className={styles.text}>Qəlbinizdəki hislərin şirin dadı</p>
            <Link to="/products" className={styles.btn}>
              Məhsullar
              <img src={ArrowLineIconWhite} />
            </Link>
          </div>
          <div className={styles.cards}>
            {adverts &&
              adverts.map((advert, index) => (
                <div
                  key={advert.id}
                  className={cs(styles.card, { [styles.open]: activeCardIndex === index })}
                  onMouseEnter={() => {
                    setActiveCardIndex(index);
                  }}
                  style={{ backgroundImage: `url(${advert.photo})` }}
                  onClick={() => navigate(`/products?categories=${advert.category}`)}
                >
                  <div className={styles.square}></div>
                  <span>{advert.title}</span>
                </div>
              ))}
          </div>
        </div>
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
                title={""}
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
                title={""}
                icon={{
                  grey: ArrowRightIcon,
                  white: ArrowRightIcon,
                }}
                isSelected={true}
                onClick={() => {
                  if (promotions?.results && activeItemIndex + 4 < promotions?.results.length)
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
              activePosition={"left"}
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
                title={"Hamısı"}
                icon={{
                  grey: AllIconGrey,
                  white: AllIconWhite,
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
              <span>Daha Çox</span>
              <img src={ArrowLineIconRed} alt="Arrow Left" />
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
