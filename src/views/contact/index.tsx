import { useState } from 'react';

import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';

import styles from './Contact.module.scss';

const Contact = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main>
      <Title title="Əlaqə" subtitle="Əlaqə" />

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79043.10255345958!2d19.588687491104825!3d51.74955063559649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb56c4119b59%3A0xfca7f17fec34f65b!2sManufaktura!5e0!3m2!1sen!2spl!4v1686474654372!5m2!1sen!2spl"
            width="100%"
            height="100%"
          ></iframe>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            name="first_name"
            placeholder="Ad"
            value={form.first_name}
            onChange={handleInputChange}
            className={styles.input}
          />

          <Input
            name="last_name"
            placeholder="Soyad"
            value={form.last_name}
            onChange={handleInputChange}
            className={styles.input}
          />

          <Input
            name="phone"
            placeholder="Telefon"
            value={form.phone}
            onChange={handleInputChange}
            className={styles.input}
          />

          <Input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
            className={styles.input}
          />

          <Input
            name="message"
            placeholder="Mesaj"
            value={form.message}
            onChange={handleInputChange}
            className={styles.textarea}
            isTextArea
          ></Input>

          <button type="submit">Təsdiqlə</button>
        </form>
      </Container>
    </main>
  );
};

export default Contact;
