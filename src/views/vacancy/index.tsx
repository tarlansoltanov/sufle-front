import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';

import styles from './Vacancy.module.scss';

const Vacancy = () => {
  return (
    <main className={styles.main}>
      <Title title="Vakansiya" subtitle="Vakansiya" />
      
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.title}>
              <hr />
              <h1>Tort ustası axtarılır !</h1>
            </div>

            <div className={styles.content}>
              <p>
                <b>Tələblər:</b>
              </p>
              <ul>
                <li>
                  <p>- Qanajlı və marçipanlı tortların bəzədilməsi, rənglənməsi</p>
                </li>
                <li>
                  <p>- Tortların üzrəndə şəkillər çəkmək, yazılar yazmaq, dekor hazırlamaq</p>
                </li>
                <li>
                  <p>- Marçipanlı tortların düzəldilməsi</p>
                </li>
                <li>
                  <p>- Marçipandan fiqurların hazırlanması</p>
                </li>
                <li>
                  <p>- Rəssamlıq, heykəltaraşlıq, şəkər xəmiri İlə işləmək bacarıqları</p>
                </li>
              </ul>
              <p>müraciətlərinizi “Tort ustası” başlığı ilə info@sufle.com mail adresinə göndərməyiniz xahiş olunur</p>
            </div>

            <div className={styles.media}>
              <div className={styles.photo}>
                <div className={styles.overlay}></div>
                <img src="/src/assets/images/vacancy/vacancy1.png" alt="Tort ustası" />
                <h2>Tort ustası</h2>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.title}>
              <hr />
              <h1>Tort ustası axtarılır !</h1>
            </div>

            <div className={styles.content}>
              <p>
                <b>Tələblər:</b>
              </p>
              <ul>
                <li>
                  <p>- Qanajlı və marçipanlı tortların bəzədilməsi, rənglənməsi</p>
                </li>
                <li>
                  <p>- Tortların üzrəndə şəkillər çəkmək, yazılar yazmaq, dekor hazırlamaq</p>
                </li>
                <li>
                  <p>- Marçipanlı tortların düzəldilməsi</p>
                </li>
                <li>
                  <p>- Marçipandan fiqurların hazırlanması</p>
                </li>
                <li>
                  <p>- Rəssamlıq, heykəltaraşlıq, şəkər xəmiri İlə işləmək bacarıqları</p>
                </li>
              </ul>
              <p>müraciətlərinizi “Tort ustası” başlığı ilə info@sufle.com mail adresinə göndərməyiniz xahiş olunur</p>
            </div>

            <div className={styles.media}>
              <div className={styles.photo}>
                <div className={styles.overlay}></div>
                <img src="/src/assets/images/vacancy/vacancy1.png" alt="Tort ustası" />
                <h2>Tort ustası</h2>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.title}>
              <hr />
              <h1>Tort ustası axtarılır !</h1>
            </div>

            <div className={styles.content}>
              <p>
                <b>Tələblər:</b>
              </p>
              <ul>
                <li>
                  <p>- Qanajlı və marçipanlı tortların bəzədilməsi, rənglənməsi</p>
                </li>
                <li>
                  <p>- Tortların üzrəndə şəkillər çəkmək, yazılar yazmaq, dekor hazırlamaq</p>
                </li>
                <li>
                  <p>- Marçipanlı tortların düzəldilməsi</p>
                </li>
                <li>
                  <p>- Marçipandan fiqurların hazırlanması</p>
                </li>
                <li>
                  <p>- Rəssamlıq, heykəltaraşlıq, şəkər xəmiri İlə işləmək bacarıqları</p>
                </li>
              </ul>
              <p>müraciətlərinizi “Tort ustası” başlığı ilə info@sufle.com mail adresinə göndərməyiniz xahiş olunur</p>
            </div>

            <div className={styles.media}>
              <div className={styles.photo}>
                <div className={styles.overlay}></div>
                <img src="/src/assets/images/vacancy/vacancy1.png" alt="Tort ustası" />
                <h2>Tort ustası</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Vacancy;
