import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faDotCircle,
  faHandshake,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./navbar";
import Footer from "./footer";
import CalendlyComponent from "./components/calendly/Calendly";
import HeaderImage from "../../public/fitness/fitnessHeader.png";

const inter = Inter({ subsets: ["latin"] });

const Fitness = () => {
  return (
    <>
      <Head>
        <title>Aviral Fitness</title>
        <meta name="description" content="Aviral Srivastava fitness" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.fitnessHeading}>
            <div className={styles.fitnessHeaderImgWrapper}>
              <Image
                src={HeaderImage}
                className={styles.fitnessHeaderImage}
                alt="profile-image"
                priority
                fill
                sizes="100w 100vh"
              />
            </div>
            <div className={styles.fitnessHeaderDescWrapper}>
              <p className={styles.fitnessHeaderDesc}>
                With years of experience in the realm of personal fitness,
                I&apos;m dedicated to helping individuals achieve their wellness
                goals. Let&apos;s embark on this transformative journey towards
                a healthier, happier you. Schedule a one-on-one session with me
                and receive expert fitness advice for <b>FREE!!</b>
              </p>
              <div className={styles.paraSeparator}>
                <FontAwesomeIcon icon={faDotCircle} />
              </div>
              <p className={styles.fitnessHeaderDesc}>
                If you&apos;re a brand looking to shine, let&apos;s collaborate
                and elevate your brand to new heights. 🚀 I&apos;m open for
                <b> Photo Shoots</b>. Whether it&apos;s a creative concept, a
                stunning portrait, or a product showcase 📸✨ Get in touch now
                and let&apos;s make magic happen! 🌟
              </p>
            </div>

            <div className={styles.connectWrapper}>
              <CalendlyComponent>
                <FontAwesomeIcon icon={faPhone} /> Schedule Call
              </CalendlyComponent>
              <a
                href="https://www.instagram.com/iamaaviral/"
                target="_blank"
                className={styles.linkToBtn}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faHandshake} /> Collaborate
              </a>
            </div>
          </div>
          <hr className={styles.hr} />
          <h2 className={styles.sectionHeader}>
            Portfolio
            <FontAwesomeIcon icon={faCamera} />
          </h2>
          <div className={styles.fitnessPhotosWrapper}>
            {[1, 2, 3, 4, 5, 6].map((e) => {
              return (
                <div className={styles.fitnessPhotos} key={e}>
                  <div className={styles.fitnessPhotoBlur} />
                  <Image
                    src={`/fitness/fitness${e}.png`}
                    decoding="async"
                    alt="profile-image"
                    fill
                    sizes="(min-width: 768px) 240px, 320px"
                    className={styles.fitnessPhotoBackground}
                  />
                  <Image
                    src={`/fitness/fitness${e}.png`}
                    decoding="async"
                    alt="profile-image"
                    fill
                    sizes="(min-width: 768px) 240px, 320px"
                    className={styles.fitnessPhoto}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Fitness;
