import { useState, useEffect } from "react";

// Import Components
import { Title, Container } from "src/components";

// Import Styles
import styles from "./styles.module.scss";

import { getAllVacancies } from "src/api";
import { IVacancy } from "src/types";

const Vacancy = () => {
  const [vacancies, setVacancies] = useState<IVacancy[] | null>([]);

  const getVacancies = async () => {
    getAllVacancies().then((data) => setVacancies(data));
  };

  useEffect(() => {
    getVacancies();
  }, []);

  return (
    <main>
      <Title title="Vakansiya" subtitle="Vakansiya" />

      <Container>
        <div className={styles.wrapper}>
          {vacancies &&
            vacancies.map(({ id, photo, name, title, description, requirements }: IVacancy) => (
              <div className={styles.box} key={id}>
                <div className={styles.title}>
                  <hr />
                  <h1>{title}</h1>
                </div>

                <div className={styles.content}>
                  <p>
                    <b>Tələblər:</b>
                  </p>
                  <ul>
                    {requirements &&
                      requirements.map((requirement: string, index: number) => (
                        <li key={index}>
                          <p>- {requirement}</p>
                        </li>
                      ))}
                  </ul>
                  <p>{description}</p>
                </div>

                <div className={styles.media}>
                  <div className={styles.photo}>
                    <div className={styles.overlay}></div>
                    <img src={photo} alt={name} />
                    <h2>{name}</h2>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </main>
  );
};

export default Vacancy;
