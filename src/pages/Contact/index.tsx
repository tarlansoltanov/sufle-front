import { useState, useEffect } from "react";

// Import External Libraries
import cs from "classnames";
import axios from "axios";

// Import Components
import { Title, Container, Input } from "src/components";

// Import Images
import { ClockIcon, LocationIcon, PhoneIcon } from "src/assets/images/icons";

// Import Styles
import styles from "./styles.module.scss";

import { IShop } from "src/types";
import { getMainShop } from "src/api";

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
          <iframe
            src={
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1518.9507053305274!2d49.8437047!3d40.4110348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030872a0c5008e9%3A0x2abb2698703442!2sSufle%20Cake%20House!5e0!3m2!1sen!2spl!4v1705397082687!5m2!1sen!2spl"
            }
            width="100%"
            height="100%"></iframe>
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
            isTextArea></Input>

          <button type="submit">Təsdiqlə</button>
        </form>
      </Container>
    </main>
  );
};

export default Contact;
