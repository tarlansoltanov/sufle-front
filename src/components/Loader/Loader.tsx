import Container from '../Container/Container';

import styles from './Loader.module.scss';

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
