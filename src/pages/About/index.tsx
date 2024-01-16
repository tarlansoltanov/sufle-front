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
            <h1>Biz kimik?</h1>
          </div>

          <div className={styles.content}>
            <p>
              “Sufle Cake House” 2015-ci ildə şirniyyatçı bir ailənin öz zəhmətlərini, ənənələrini
              və kustar təcrübələrini korporativ müstəviyə daşıması qərarı ilə bir şirniyyat evi
              kimi qurulmuşdur. Fəaliyyətə başladığı ilk dönəmlərdən etibarən həm istehsal, həm də
              xidmət keyfiyyəti ilə Sumqayıt şirniyyat istehlakçılarının plutonik sevgilərini
              qazanan “Sufle Cake House” bu müddət ərzində Sumqayıt şəhərində 3 filial ilə, Bakı
              şəhərində isə 1 filial ilə müştərilərə yaxınlaşmışdır.
            </p>
          </div>

          <div className={styles.media}>
            <div
              className={cs(styles.photo, styles.photoBig)}
              style={{
                backgroundImage: `url(${AboutImage1})`,
              }}>
              <div className={styles.square}></div>
              <h2>Niyə Biz?</h2>
            </div>

            <div
              className={cs(styles.photo, styles.photoSmall)}
              style={{
                backgroundImage: `url(${AboutImage2})`,
              }}>
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
            <div className={styles.title}>80+</div>
            <div className={styles.subtitle}>məhsul</div>
          </div>

          <div className={styles.statBox}>
            <div className={styles.title}>4</div>
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
              “Sufle Cake House”-da yüksək keyfiyyət, gigiyena-sanitariya, halal xammallardan
              istifadə, incə zövqlü işləmələr, eləcə də ədalətli qiymət, müştərilərə fərdi yanaşma
              və müştəri məmnuniyyətinin yüksək səviyyədə saxlanılması prinsipləri hökm sürməkdədir.
              Alıcıların sakinlərinin əlamətdar və xoş günlərinin tərəf müqabilinə çevrilmiş “Sufle
              Cake House” bundan sonra da hər zaman davamlı inkişaf siyasətini yürüdərək, yalnız
              Sumqayıt və Bakı deyil, eləcə də respublikanın digər bölgələrində də istehlakçıların
              şirniyyat tələbatlarını yüksək keyfiyyətlə təmin etməyi vəd verir.
            </p>
          </div>

          <div className={styles.media}>
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url(${AboutImage3})`,
              }}>
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
