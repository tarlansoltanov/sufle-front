import cs from 'classnames';
import { useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import { IGallery } from '../../types';
import { getGalleryItems } from '../../api';
import { getVideoThumbnail } from '../../utils';

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ImageIconGrey,
  ImageIconWhite,
  VideoIconGrey,
  VideoIconWhite,
} from '../../assets/images/icons';

import Container from '../../components/Container/Container';
import Selector from '../../components/Selector/Selector';
import Title from '../../components/Title/Title';

import styles from './Gallery.module.scss';

const Gallery = () => {
  // Gallery Items

  const [galleryItems, setGalleryItems] = useState<IGallery[]>([]);
  const [galleryType, setGalleryType] = useState<'image' | 'video'>('image');

  useEffect(() => {
    getGalleryItems(galleryType)
      .then((res) => setGalleryItems(res))
      .catch((err) => console.log(err));

    setActiveItemIndex(0);
  }, [galleryType]);

  // Slider
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      window.innerWidth - document.documentElement.clientWidth + 'px'
    );
  }, [galleryItems]);

  return (
    <main>
      <Title title="Qalereya" subtitle="Qalereya" />
      <Container>
        <div className={styles.gallery}>
          <div className={styles.header}>
            <div className={styles.selections}>
              <Selector
                title={'Şəkillər'}
                icon={{
                  grey: ImageIconGrey,
                  white: ImageIconWhite,
                }}
                isSelected={galleryType == 'image'}
                onClick={() => setGalleryType('image')}
                className={styles.selector}
              />
              <Selector
                title={'Videolar'}
                icon={{
                  grey: VideoIconGrey,
                  white: VideoIconWhite,
                }}
                isSelected={galleryType == 'video'}
                onClick={() => setGalleryType('video')}
                className={styles.selector}
              />
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
                  if (activeItemIndex + 3 < galleryItems.length)
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
              numberOfCards={window.innerWidth > 320 ? 3 : 1}
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
              {galleryItems.map((item) =>
                item.type === 'image' ? (
                  <div
                    key={item.id}
                    className={styles.card}
                    style={{ backgroundImage: `url('${item.url}')` }}
                  >
                    <span>{item.title}</span>
                    <div className={styles.square}></div>
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className={styles.card}
                    style={{ backgroundImage: `url('${getVideoThumbnail(item.url)}')` }}
                  >
                    <span>{item.title}</span>
                    <div className={styles.square}></div>
                  </div>
                )
              )}
            </ItemsCarousel>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Gallery;
