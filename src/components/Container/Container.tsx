import React from 'react';
import styles from './Container.module.scss';

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;