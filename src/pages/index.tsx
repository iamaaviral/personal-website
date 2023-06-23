import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faFacebook,
  faGit,
  faGitAlt,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faReact,
  faSass,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faLaptopCode,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aviral Portfolio</title>
        <meta
          name="description"
          content="Aviral Srivastava Portfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header className={styles.header}>
          <nav className={`${styles.container} ${styles.clearfix}`}>
            <ul className={`${styles.menu} ${styles.pullLeft}`}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog.html">Blog</Link>
              </li>
              <li>
                <Link href="/projects.html">Projects</Link>
              </li>
            </ul>
            <div className={`${styles.headerTools} ${styles.pullRight}`}>
              <Link
                href="https://www.linkedin.com/in/iamaaviral/"
                target="_blank"
                className={`${styles.socialWrapper} ${styles.linkedin}`}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.socialIcon}
                />
              </Link>
              <Link
                href="https://www.instagram.com/iamaaviral/"
                target="_blank"
                className={`${styles.socialWrapper} ${styles.instagram}`}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.socialIcon}
                />
              </Link>
              <Link
                href="https://www.facebook.com/aviral.srivastava3/"
                target="_blank"
                className={`${styles.socialWrapper} ${styles.facebook}`}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.socialIcon}
                />
              </Link>
              <Link
                href="https://www.twitter.com/iamaaviral/"
                target="_blank"
                className={`${styles.socialWrapper} ${styles.twitter}`}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.socialIcon}
                />
              </Link>
              <Link
                href="https://www.github.com/iamaaviral/"
                target="_blank"
                className={`${styles.socialWrapper} ${styles.github}`}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.socialIcon}
                />
              </Link>
            </div>
          </nav>
        </header>

        <div className={styles.clearfix}>
          <section className={`${styles.fixedWrapper} ${styles.clearfix}`}>
            <div className={`${styles.container} ${styles.clearfix}`}>
              <div className={styles.homepageTitle}>
                <div className={styles.profileImage}>
                  <img
                    src="/image.png"
                    alt="profile-image"
                    className={styles.profileImageDimension}
                  />
                </div>

                <h1 className={styles.profileName}>
                  Aviral <span>Srivastava</span>
                </h1>
                <h2 className={styles.profileDesc}>
                  {" "}
                  A front-end Web Developer{" "}
                  <FontAwesomeIcon icon={faLaptopCode} />
                </h2>
              </div>
              <div className={`${styles.triangle} ${styles.toLeft}`}></div>
              <div className={`${styles.triangle} ${styles.toRight}`}></div>
              <div className={styles.introBlock}>
                <div className="container clearfix">
                  <div className={styles.introParagraph}>
                    <p>
                      Hi, I&apos;m <b>Aviral</b>, a self-motivated Tech
                      Enthusiast.
                    </p>
                    <p>
                      I am a front-end software developer with experience of
                      building web and mobile applications using a variety of
                      tools and have exposure to the entire gamut of software
                      development lifecycle working on areas ranging all the way
                      from data modelling to UI design and release management
                    </p>
                    <hr className={styles.hr} />
                  </div>
                  <div className={styles.techStack}>
                    <div className={styles.iconBlock}>
                      <FontAwesomeIcon
                        icon={faHtml5}
                        className={`${styles.skillIcon} ${styles.html5}`}
                        title="HTML5"
                      />
                    </div>

                    <div className={styles.iconBlock}>
                      <FontAwesomeIcon
                        icon={faCss3}
                        className={`${styles.skillIcon} ${styles.css3}`}
                        title="CSS3"
                      />
                    </div>

                    <div className={styles.iconBlock}>
                      <FontAwesomeIcon
                        icon={faJs}
                        className={`${styles.skillIcon} ${styles.js}`}
                        title="JAVASCRIPT"
                      />
                    </div>
                    <div className={styles.iconBlock}>
                      <FontAwesomeIcon
                        icon={faReact}
                        className={`${styles.skillIcon} ${styles.react}`}
                        title="REACT"
                      />
                    </div>

                    <div className={styles.iconBlock}>
                      <FontAwesomeIcon
                        icon={faGitAlt}
                        className={`${styles.skillIcon} ${styles.git}`}
                        title="GIT"
                      />
                    </div>
                    <div className={styles.iconBlock}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        className={`${styles.skillIcon} ${styles.gitHub}`}
                        title="GITHUB"
                      />
                    </div>
                    <div className={styles.iconBlock}>
                      <FontAwesomeIcon
                        icon={faSass}
                        className={`${styles.skillIcon} ${styles.sass}`}
                        title="SASS"
                      />
                    </div>

                    <div className={styles.iconBlock}>
                      <FontAwesomeIcon
                        icon={faBootstrap}
                        className={`${styles.skillIcon} ${styles.bootstrap}`}
                        title="BOOTSTRAP"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
