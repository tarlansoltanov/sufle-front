// Import External Libraries
import cs from "classnames";

// Import Styles
import styles from "./styles.module.scss";

interface SelectorProps {
  icon: {
    white: string;
    grey: string;
    red?: string;
  };
  title: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const Selector = ({ icon, title, isSelected = false, onClick, className }: SelectorProps) => {
  return (
    <div
      className={cs(styles.selector, { [styles.selected]: isSelected }, className)}
      onClick={onClick}
    >
      <div className={styles.icon}>
        <img src={isSelected ? icon.white : icon.grey} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Selector;
