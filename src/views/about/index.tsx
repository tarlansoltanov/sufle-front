import cs from 'classnames';

import Container from '../../components/Container/Container';

import styles from './About.module.scss';

const About = () => {
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.infoBox}>
          <div className={styles.title}>
            <hr />
            <h1>Komandamız</h1>
          </div>

          <div className={styles.content}>
            <p>Lorem ipsum dolor sit amet consectetur. Ipsum ac semper massa convallis amet neque quam. Pretium vestibulum eget enim pharetra ut in congue arcu et. Ipsum pulvinar amet amet amet. Ornare sit ullamcorper facilisi in eu enim iaculis etiam quam. Egestas donec tincidunt risus platea volutpat posuere. Mi cursus quis sit feugiat donec scelerisque tempor in. Facilisis commodo tristique lectus vel parturient nisi quis. Id ultrices amet ac non enim bibendum commodo. Sit et ut elementum nisl scelerisque sed auctor.</p>
          </div>

          <div className={styles.media}>
            <div className={cs(styles.photo, styles.photoBig)} style={{ backgroundImage: "url('/src/assets/images/about/about1.png')" }}>
              <div className={styles.square}></div>
              <h2>Niyə Biz?</h2>
            </div>

            <div className={cs(styles.photo, styles.photoSmall)} style={{ backgroundImage: "url('/src/assets/images/about/about2.png')" }}>
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
            <p>Lorem ipsum dolor sit amet consectetur. Ipsum ac semper massa convallis amet neque quam. Pretium vestibulum eget enim pharetra ut in congue arcu et. Ipsum pulvinar amet amet amet. Ornare sit ullamcorper facilisi in eu enim iaculis etiam quam. Egestas donec tincidunt risus platea volutpat posuere. Mi cursus quis sit feugiat donec scelerisque tempor in. Facilisis commodo tristique lectus vel parturient nisi quis. Id ultrices amet ac non enim bibendum commodo. Sit et ut elementum nisl scelerisque sed auctor.</p>
          </div>

          <div className={styles.media}>
            <div className={styles.photo} style={{ backgroundImage: "url('/src/assets/images/about/about3.png')" }}>
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
