import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./navbar";
import Footer from "./footer";
import CalendlyComponent from "./components/calendly/Calendly";

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
              <div className={styles.bgFront} />
              <Image
                src="/fitness/fitnessHeader.png"
                className={styles.fitnessHeaderImage}
                alt="profile-image"
                loading="eager"
                priority
                fill
                sizes="100%"
              />
            </div>

            <p className={styles.fitnessHeaderDesc}>
              With years of experience in the realm of personal fitness,
              I&apos;m dedicated to helping individuals achieve their wellness
              goals. Together, we&apos;ll sculpt your body, boost your
              confidence, and unlock your full potential. Let&apos;s embark on
              this transformative journey towards a healthier, happier you.
            </p>
            <div className={styles.bookContainer}>
              <h4 className={styles.bookText}>
                Remember, the journey of a thousand miles begins with a single
                step. Are you ready to take that step?
                <br />
                Book yourself a 1-1 call now for FREE!!
              </h4>
              <div className={styles.arrowBtnWrapper}>
              <Image
                src="/work/arrow.svg"
                alt="SVG Image"
                width={200}
                height={200}
                className={styles.arrowSvg}
              />
              <CalendlyComponent />
              </div>

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
                    loading="lazy"
                    decoding="async"
                    alt="profile-image"
                    fill
                    sizes="100%"
                    className={styles.fitnessPhotoBackground}
                  />
                  <Image
                    src={`/fitness/fitness${e}.png`}
                    loading="lazy"
                    decoding="async"
                    alt="profile-image"
                    fill
                    sizes="100%"
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
