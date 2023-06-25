import { Link } from 'react-router-dom';

import Input from '../../components/Input/Input';

import styles from './Errors.module.scss';

interface Props {
  error_code?: number;
}

const ErrorPage = ({ error_code }: Props) => {
  error_code = error_code || 404;

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{error_code || 404}</h1>
        <h2 className={styles.subtitle}>Oops! Bu Səhifə Tapılmadı!</h2>
        <p className={styles.text}>
          Səhifə adı düzgün yazılıb-yazılmadığını yoxlayın və ya səhifə artıq mövcud deyil.
        </p>

        <h3 className={styles.home}>
          <Link to="/">Ana Səhifəyə</Link> qayıt
        </h3>

        <Input
          name="search"
          placeholder="Axtarış..."
          className={styles.search}
          icon="/src/assets/images/icons/search.svg"
        />
      </div>
    </main>
  );
};

export default ErrorPage;
