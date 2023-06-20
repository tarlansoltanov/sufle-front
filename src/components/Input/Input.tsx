import cs from 'classnames';

import styles from './Input.module.scss';

interface Props {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isSearch?: boolean;
  isTextArea?: boolean;
}

const Input = ({
  name,
  placeholder,
  type,
  value,
  icon,
  className,
  style,
  onChange,
  isSearch,
  isTextArea,
}: Props) => {
  return (
    <div
      className={cs(styles.input, className, {
        [styles.withIcon]: icon,
        [styles.search]: isSearch,
      })}
      style={style}
    >
      {icon && <img src={icon} alt={name} />}

      {isTextArea ? (
        <textarea
          name={name}
          id={name}
          cols={30}
          rows={10}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          name={name}
          type={type ? type : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
