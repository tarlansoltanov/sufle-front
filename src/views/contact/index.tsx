import { useState, useEffect } from 'react';

import { IShop } from '../../types';
import { getMainShop } from '../../api';

import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';

import styles from './Contact.module.scss';

const Contact = () => {
  const [shop, setShop] = useState<IShop | null>(null);

  useEffect(() => {
    getMainShop().then((data) => setShop(data));
  }, []);

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

            <p className={styles.text}>{shop?.address}</p>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <img src="/src/assets/images/icons/phone.svg" alt="Phone" />
            </div>

            <h2 className={styles.title}>Əlaqə</h2>

            <p className={styles.text}>
              Telefon: {shop?.phone} <br />
              Email: {shop?.email}
            </p>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <img src="/src/assets/images/icons/clock.svg" alt="Clock" />
            </div>

            <h2 className={styles.title}>İş Saatları</h2>

            <p className={styles.text}>{shop?.working_hours}</p>
          </div>
        </div>

        <div className={styles.map}>
          <iframe src={shop?.map_url} width="100%" height="100%"></iframe>
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
