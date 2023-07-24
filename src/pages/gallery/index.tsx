import { useEffect, useState } from "react";

// Import External Libraries
import ItemsCarousel from "react-items-carousel";

import cs from "classnames";

import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// Import Components
import Container from "src/components/Container/Container";
import Selector from "src/components/Selector/Selector";
import Loader from "src/components/Loader/Loader";
import Title from "src/components/Title/Title";

// Import Images
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ImageIconGrey,
  ImageIconWhite,
  VideoIconGrey,
  VideoIconWhite,
} from "src/assets/images/icons";

// Import Styles
import styles from "./styles.module.scss";

import { IGallery } from "src/types";
import { getGalleryItems } from "src/api";
import { getVideoThumbnail, getVideoId } from "src/utils";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<IGallery[]>([]);
  const [galleryType, setGalleryType] = useState<"image" | "video">("image");

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
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    );
  }, [galleryItems]);

  // Lightbox
  const [selectedImage, setSelectedImage] = useState<number>(-1);
  const [videoModal, setVideoModal] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("");

  if (galleryItems.length === 0) return <Loader />;

  return (
    <main>
      <Title title="Qalereya" subtitle="Qalereya" />
      <Container>
        <div className={styles.gallery}>
          <div className={styles.header}>
            <div className={styles.selections}>
              <Selector
                title={"Şəkillər"}
                icon={{
                  grey: ImageIconGrey,
                  white: ImageIconWhite,
                }}
                isSelected={galleryType == "image"}
                onClick={() => setGalleryType("image")}
                className={styles.selector}
              />
              <Selector
                title={"Videolar"}
                icon={{
                  grey: VideoIconGrey,
                  white: VideoIconWhite,
                }}
                isSelected={galleryType == "video"}
                onClick={() => setGalleryType("video")}
                className={styles.selector}
              />
            </div>

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
              {galleryItems.map((item) =>
                item.type === "image" ? (
                  <div
                    key={item.id}
                    className={styles.card}
                    style={{ backgroundImage: `url('${item.url}')` }}
                    onClick={() => setSelectedImage(galleryItems.indexOf(item))}
                  >
                    <span>{item.title}</span>
                    <div className={styles.square}></div>
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className={styles.card}
                    style={{ backgroundImage: `url('${getVideoThumbnail(item.url)}')` }}
                    onClick={() => {
                      setVideoId(getVideoId(item.url) || "");
                      setVideoModal(true);
                    }}
                  >
                    <span>{item.title}</span>
                    <div className={styles.square}></div>
                  </div>
                )
              )}
            </ItemsCarousel>
            {selectedImage !== -1 ? (
              <Lightbox
                mainSrc={galleryItems[selectedImage].url}
                nextSrc={galleryItems[(selectedImage + 1) % galleryItems.length].url}
                prevSrc={
                  galleryItems[(selectedImage + galleryItems.length - 1) % galleryItems.length].url
                }
                imageCaption={galleryItems[selectedImage].title}
                onCloseRequest={() => setSelectedImage(-1)}
                onMovePrevRequest={() =>
                  setSelectedImage((selectedImage + galleryItems.length - 1) % galleryItems.length)
                }
                onMoveNextRequest={() =>
                  setSelectedImage((selectedImage + 1) % galleryItems.length)
                }
              />
            ) : null}

            <ModalVideo
              videoId={videoId}
              channel="youtube"
              isOpen={videoModal}
              onClose={() => {
                setVideoModal(!videoModal);
              }}
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Gallery;
