import styles from './Title.module.scss';

interface Props {
  title: string;
  subtitle: string;
}

const Title = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.container}>
      <hr />

      <p>{subtitle}</p>

      <h1>{title}</h1>
    </div>
  );
};

export default Title;
