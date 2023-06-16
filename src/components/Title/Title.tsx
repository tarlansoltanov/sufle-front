import styles from './Title.module.scss';

interface Props {
  title: string;
  subtitle: string;
}

const Title = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.container}>
      <hr />

      <p>{title}</p>

      <h1>{subtitle}</h1>
    </div>
  );
};

export default Title;
