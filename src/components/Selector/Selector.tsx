import cs from 'classnames';

import styles from './Selector.module.scss';

interface SelectorProps {
  icon: string;
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
        <img src={icon} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Selector;
