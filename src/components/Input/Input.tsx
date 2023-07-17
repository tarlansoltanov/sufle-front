import cs from "classnames";

import styles from "./Input.module.scss";

interface Props {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isSearch?: boolean;
  isTextArea?: boolean;
  readonly?: boolean;
}

const Input = ({
  name,
  placeholder,
  type,
  value,
  icon,
  className,
  style,
  required,
  onChange,
  isTextArea,
  readonly,
}: Props) => {
  return (
    <div
      className={cs(className, styles.input, {
        [styles.withIcon]: icon,
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
          readOnly={readonly}
          required={required}
        ></textarea>
      ) : (
        <input
          name={name}
          type={type ? type : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readonly}
          required={required}
        />
      )}
    </div>
  );
};

export default Input;
