import React from 'react';
import cs from 'classnames';

import styles from './Container.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={cs(styles.container, className)}>{children}</div>;
};

export default Container;
