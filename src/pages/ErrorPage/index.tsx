import { Link } from "react-router-dom";

// Import Components
import Input from "src/components/Input/Input";

// Import Images
import { SearchIcon } from "src/assets/images/icons";

// Import Styles
import styles from "./styles.module.scss";

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

        <form method="GET" action="/products">
          <Input
            name="search"
            placeholder="Axtarış..."
            className={styles.search}
            icon={SearchIcon}
          />
        </form>
      </div>
    </main>
  );
};

export default ErrorPage;
