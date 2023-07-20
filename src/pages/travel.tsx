import Head from "next/head";
import { Inter, Kanit } from "next/font/google";
import Image from "next/image";

import styles from "@/styles/Travel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMapSigns,
  faPlaceOfWorship,
  faTape,
  faThumbTack,
} from "@fortawesome/free-solid-svg-icons";

import HeaderImage from "../../public/travel/travelHeader.png";
import Footer from "./footer";
import Navbar from "./navbar";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ weight: "600", subsets: ["latin"] });

const Travel = () => {
  const [hoveredPhotoIndex, setHoveredPhotoIndex] = useState<null | number>(
    null
  );

  return (
    <>
      <Head>
        <title>Aviral Travel</title>
        <meta name="description" content="Aviral Srivastava Portfolio travel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.travelHeading}>
            <div className={styles.travelHeaderImgWrapper}>
              <Image
                src={HeaderImage}
                className={styles.travelHeaderImage}
                alt="profile-image"
                priority
                fill
                sizes="100vh 100vw"
              />
            </div>
            <p className={styles.travelHeaderDesc}>
              With years of experience in the realm of personal fitness,
              I&apos;m dedicated to helping individuals achieve their wellness
              goals. Let&apos;s embark on this transformative journey towards a
              healthier, happier you. Schedule a one-on-one session with me and
              receive expert fitness advice for <b>FREE!!</b>
              If you&apos;re a brand looking to shine, let&apos;s collaborate
              and elevate your brand to new heights. 🚀 I&apos;m open for
              <b> photoshoots</b>. Whether it&apos;s a creative concept, a
              stunning portrait, or a product showcase 📸✨ Get in touch now and
              let&apos;s make magic happen! 🌟
            </p>
            <div className={styles.connectWrapper}>
              <a
                href="https://ig.me/m/iamaaviral"
                target="_blank"
                className={styles.linkToBtn}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Explore now
              </a>
            </div>
          </div>
          <hr className={styles.hr} />
          <h2 className={styles.sectionHeader}>
            Places
            <FontAwesomeIcon icon={faPlaceOfWorship} />
          </h2>
          <div className={styles.travelPlacesWrapper}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
              return (
                <div
                  className={styles.travelPlaceContainer}
                  key={e}
                  onMouseEnter={() => setHoveredPhotoIndex(e)}
                  onMouseLeave={() => setHoveredPhotoIndex(null)}
                >
                  <Image
                    src={`/travel/travelHeader${e}.png`}
                    decoding="async"
                    alt="profile-image"
                    fill
                    sizes="(min-width: 768px) 240px, 320px"
                    className={styles.travelPhotoBackground}
                  />
                  <Image
                    src={`/travel/travelHeader${e}.png`}
                    decoding="async"
                    alt="profile-image"
                    fill
                    sizes="(min-width: 768px) 240px, 320px"
                    className={styles.travelPhoto}
                  />
                  <div
                    className={styles.travelPlaceCover}
                    style={{
                      display: hoveredPhotoIndex === e ? "flex" : "none",
                    }}
                  >Switzerland</div>
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

export default Travel;
