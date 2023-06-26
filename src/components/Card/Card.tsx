import React from 'react';
import cs from 'classnames';

import { IImage } from '../../types';

import styles from './Card.module.scss';

interface Props {
  photos: IImage[];
  name: string;
  price: number;
  isNew?: boolean;
  discount: number;
  className?: string;
  photoClass?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function Card({
  photos,
  name,
  price,
  isNew,
  discount,
  className,
  photoClass,
  style,
  onClick,
}: Props) {
  return (
    <div className={cs(className, styles.card)} style={style} onClick={onClick}>
      <div className={cs(photoClass, styles.photo)}>
        <img src={photos[0].image} className={cs(styles.standart)} />
        <img src={photos.length > 1 ? photos[1].image : photos[0].image} className={cs(styles.hover)} />
        {discount > 0 && (
          <div className={styles.discount}>
            <span>{discount}%</span>
          </div>
        )}

        {isNew && (
          <div className={styles.tag}>
            <img src="/src/assets/images/icons/new.svg" alt="New" />
            <span>New</span>
          </div>
        )}
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>
          <p className={styles.currentPrice}>{(price * ((100 - discount) / 100)).toFixed(2)} AZN</p>
          {discount > 0 && <p className={styles.oldPrice}>{price} AZN</p>}
        </div>
      </div>
    </div>
  );
}

export default Card;
