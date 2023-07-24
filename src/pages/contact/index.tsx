import { useState, useEffect } from "react";
import cs from "classnames";

import { IShop } from "../../types";
import { getMainShop } from "../../api";

import { ClockIcon, LocationIcon, PhoneIcon } from "../../assets/images/icons";

import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";

import styles from "./Contact.module.scss";
import axios from "axios";

const Contact = () => {
  const [shop, setShop] = useState<IShop | null>(null);

  useEffect(() => {
    getMainShop().then((data) => setShop(data));
  }, []);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://api.sufle.az/api/contact/",
      data: form,
    })
      .then((res) => {
        setForm({
          name: "",
          surname: "",
          phone: "",
          email: "",
          message: "",
        });
        console.log(res);
      })
      .catch((err) => {
        setForm({
          name: "",
          surname: "",
          phone: "",
          email: "",
          message: "",
        });
        console.log(err);
      });
  };

  return (
    <main>
      <Title title="Əlaqə" subtitle="Əlaqə" />

      <Container>
        <div className={styles.contacts}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <img src={LocationIcon} alt="Location" />
            </div>

            <h2 className={styles.title}>Ünvan</h2>

            <p className={styles.text}>{shop?.address}</p>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <img src={PhoneIcon} alt="Phone" />
            </div>

            <h2 className={styles.title}>Əlaqə</h2>

            <p className={cs(styles.text, styles.phone)}>
              Telefon: {shop?.phone} <br />
              Email: {shop?.email}
            </p>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <img src={ClockIcon} alt="Clock" />
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
            name="name"
            placeholder="Ad"
            value={form.name}
            onChange={handleInputChange}
            className={styles.input}
            required
          />

          <Input
            name="surname"
            placeholder="Soyad"
            value={form.surname}
            onChange={handleInputChange}
            className={styles.input}
            required
          />

          <Input
            name="phone"
            placeholder="Telefon"
            value={form.phone}
            onChange={handleInputChange}
            className={styles.input}
            required
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
            required
            isTextArea
          ></Input>

          <button type="submit">Təsdiqlə</button>
        </form>
      </Container>
    </main>
  );
};

export default Contact;
