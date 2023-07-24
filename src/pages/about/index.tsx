// Import External Libraries
import cs from "classnames";

// Import Components
import { Title, Container } from "src/components";

// Import Images
import { AboutImage1, AboutImage2, AboutImage3 } from "src/assets/images";

// Import Styles
import styles from "./styles.module.scss";

const About = () => {
  return (
    <main>
      <Title title="Haqqımızda" subtitle="Haqqımızda" />

      <Container>
        <div className={styles.infoBox}>
          <div className={styles.title}>
            <hr />
            <h1>Komandamız</h1>
          </div>

          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum ac semper massa convallis amet neque
              quam. Pretium vestibulum eget enim pharetra ut in congue arcu et. Ipsum pulvinar amet
              amet amet. Ornare sit ullamcorper facilisi in eu enim iaculis etiam quam. Egestas
              donec tincidunt risus platea volutpat posuere. Mi cursus quis sit feugiat donec
              scelerisque tempor in. Facilisis commodo tristique lectus vel parturient nisi quis. Id
              ultrices amet ac non enim bibendum commodo. Sit et ut elementum nisl scelerisque sed
              auctor.
            </p>
          </div>

          <div className={styles.media}>
            <div
              className={cs(styles.photo, styles.photoBig)}
              style={{
                backgroundImage: `url(${AboutImage1})`,
              }}
            >
              <div className={styles.square}></div>
              <h2>Niyə Biz?</h2>
            </div>

            <div
              className={cs(styles.photo, styles.photoSmall)}
              style={{
                backgroundImage: `url(${AboutImage2})`,
              }}
            >
              <div className={styles.square}></div>
              <h2>Niyə Biz?</h2>
            </div>
          </div>
        </div>

        <div className={styles.statistics}>
          <div className={styles.statBox}>
            <div className={styles.title}>100%</div>
            <div className={styles.subtitle}>təbii</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.title}>38+</div>
            <div className={styles.subtitle}>məhsul</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.title}>10+</div>
            <div className={styles.subtitle}>filial</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.title}>12 il</div>
            <div className={styles.subtitle}>təcrübə</div>
          </div>
        </div>

        <div className={cs(styles.infoBox, styles.reversed)}>
          <div className={styles.title}>
            <hr />
            <h1>Məhsullarımız</h1>
          </div>

          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum ac semper massa convallis amet neque
              quam. Pretium vestibulum eget enim pharetra ut in congue arcu et. Ipsum pulvinar amet
              amet amet. Ornare sit ullamcorper facilisi in eu enim iaculis etiam quam. Egestas
              donec tincidunt risus platea volutpat posuere. Mi cursus quis sit feugiat donec
              scelerisque tempor in. Facilisis commodo tristique lectus vel parturient nisi quis. Id
              ultrices amet ac non enim bibendum commodo. Sit et ut elementum nisl scelerisque sed
              auctor.
            </p>
          </div>

          <div className={styles.media}>
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url(${AboutImage3})`,
              }}
            >
              <div className={styles.square}></div>
              <h2>Məhsullarımız</h2>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default About;
