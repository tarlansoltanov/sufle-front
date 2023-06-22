import React from 'react';
import cs from 'classnames';

import styles from './Card.module.scss';

interface Props {
  photo: string;
  name: string;
  price: number;
  isNew?: boolean;
  discount?: number;
  className?: string;
  photoClass?: string;
  style?: React.CSSProperties;
}

function Card({ photo, name, price, isNew, discount, className, photoClass, style }: Props) {
  return (
    <div className={cs(className, styles.card)} style={style}>
      <div className={cs(photoClass, styles.photo)}>
        <img src={photo} className={cs(styles.photo)} />
        {isNew && (
          <div className={styles.tag}>
            <img src="/src/assets/images/icons/new.svg" alt="New" />
            <span>New</span>
          </div>
        )}
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>{price} AZN</div>
      </div>
    </div>
  );
}

export default Card;
