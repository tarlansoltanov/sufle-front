import Container from '../../components/Container/Container';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.contacts}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <img src="/src/assets/images/icons/location.svg" alt="Location" />
            </div>

            <h2 className={styles.title}>Ünvan</h2>

            <p className={styles.text}>H.Əliyev prospekti 21902a Sumqayit şəhəri</p>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <img src="/src/assets/images/icons/phone.svg" alt="Phone" />
            </div>

            <h2 className={styles.title}>Əlaqə</h2>

            <p className={styles.text}>
              Telefon: 018 65 11 22 33 <br />
              Email: info@sufle.com
            </p>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <img src="/src/assets/images/icons/clock.svg" alt="Clock" />
            </div>

            <h2 className={styles.title}>İş Saatları</h2>

            <p className={styles.text}>B.e - Bazar: 09:00-21:00</p>
          </div>
        </div>

        <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79043.10255345958!2d19.588687491104825!3d51.74955063559649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb56c4119b59%3A0xfca7f17fec34f65b!2sManufaktura!5e0!3m2!1sen!2spl!4v1686474654372!5m2!1sen!2spl" width="100%" height="100%"></iframe>
        </div>

        <form className={styles.form}>
          <input name="first_name" type="text" placeholder="Ad" />
          <input name="last_name" type="text" placeholder="Soyad" />
          <input name="phone" type="text" placeholder="Telefon" />
          <input name="email" type="text" placeholder="Email" />
          <textarea name="message" id="message" cols={30} rows={10} placeholder="Mesaj"></textarea>

          <button type="submit">Təsdiqlə</button>
        </form>
      </Container>
    </main>
  );
};

export default Contact;
