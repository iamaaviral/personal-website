import { Kanit } from "next/font/google";
import Image from "next/image";

import {
  faCar,
  faDumbbell,
  faLaptopCode,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/Home.module.css";

const lato = Kanit({ weight: "600", subsets: ["latin"] });

const Main = () => {
  return (
    <div className={styles.clearfix}>
      <section className={`${styles.fixedWrapper} ${styles.clearfix}`}>
        <div className={`${styles.container} ${styles.clearfix}`}>
          <div className={styles.homepageTitle}>
            <div className={styles.profileImage}>
              <Image
                src="/image.png"
                priority={true}
                alt="profile-image"
                fill
                sizes="100%"
              />
            </div>

            <h1 className={`${styles.profileName} ${lato.className}`}>
              Aviral <span>Srivastava</span>
            </h1>
            <h2 className={styles.profileDesc}>
              <span className={`${styles.coloredText} ${styles.codeText}`}>
                Code <FontAwesomeIcon icon={faLaptopCode} />
              </span>
              |
              <span className={`${styles.coloredText} ${styles.dumbellText}`}>
                fitness
                <FontAwesomeIcon icon={faDumbbell} />
              </span>
              |
              <span className={`${styles.coloredText} ${styles.travelText}`}>
                Travel
                <FontAwesomeIcon icon={faCar} />
              </span>
            </h2>
          </div>
          <div className={`${styles.triangle} ${styles.toLeft}`}></div>
          <div className={`${styles.triangle} ${styles.toRight}`}></div>
          <div className={styles.introBlock}>
            <div className="container clearfix">
              <div className={styles.introParagraph}>
                <p className={styles.introHead}>
                  Hi, I&apos;m <b>Aviral</b>, a self-motivated &#x201D;Tech driven wellness
                  nomad&#x201D;
                </p>
                <p  className={styles.introDesc}>
                  Master coder by day, fitness enthusiast by night, and
                  globetrotter by nature. Eager to master the art of coding, defy physical limitations, and uncover the wonders of the globe.
                </p>
                <h3  className={styles.introFooter}>
                  Welcome to my portfolio. Feel free to browse my website, connect on any social media or directly book a 1 on 1. Thank you for visiting!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
