import React from "react";

// Import External Libraries
import cs from "classnames";

// Import Styles
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={cs(styles.container, className)}>{children}</div>;
};

export default Container;
