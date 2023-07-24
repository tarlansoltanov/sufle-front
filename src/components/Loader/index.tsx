// Import Components
import Container from "src/components/Container";

// Import Styles
import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <main>
      <Container>
        <div className={styles.loader}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </Container>
    </main>
  );
};

export default Loader;
