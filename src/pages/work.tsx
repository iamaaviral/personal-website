import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOsi } from "@fortawesome/free-brands-svg-icons";
import {
  faLaptop,
  faMagicWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faGithub,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/Home.module.css";
import styles1 from "@/styles/Work.module.css";

import Navbar from "./navbar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

const Work = () => {
  return (
    <>
      <Head>
        <title>Aviral Projects</title>
        <meta
          name="description"
          content="Aviral Srivastava Portfolio projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.fitnessHeading}>
            <div className={styles1.workHeaderImgWrapper}>
              <div className={styles1.bgFront} />
              <div className={styles1.workHeaderImgContainer}>
              <Image
                src="/work/workHeader1.png"
                className={styles1.workHeaderImage}
                alt="profile-image"
                loading="eager"
                priority
                fill
                sizes="50vw, 50vw" 
              />

              </div>

            </div>
            <div className={styles1.techStack}>
                <div className={styles1.iconBlock}>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className={`${styles1.skillIcon} ${styles1.html5}`}
                    title="HTML5"
                  />
                </div>

                <div className={styles1.iconBlock}>
                  <FontAwesomeIcon
                    icon={faCss3}
                    className={`${styles1.skillIcon} ${styles1.css3}`}
                    title="CSS3"
                  />
                </div>

                <div className={styles1.iconBlock}>
                  <FontAwesomeIcon
                    icon={faJs}
                    className={`${styles1.skillIcon} ${styles1.js}`}
                    title="JAVASCRIPT"
                  />
                </div>
                <div className={styles1.iconBlock}>
                  <FontAwesomeIcon
                    icon={faReact}
                    className={`${styles1.skillIcon} ${styles1.react}`}
                    title="REACT"
                  />
                </div>

                <div className={styles1.iconBlock}>
                  <FontAwesomeIcon
                    icon={faGitAlt}
                    className={`${styles1.skillIcon} ${styles1.git}`}
                    title="GIT"
                  />
                </div>
                <div className={styles1.iconBlock}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={`${styles1.skillIcon} ${styles1.gitHub}`}
                    title="GITHUB"
                  />
                </div>
                <div className={styles1.iconBlock}>
                  <FontAwesomeIcon
                    icon={faSass}
                    className={`${styles1.skillIcon} ${styles1.sass}`}
                    title="SASS"
                  />
                </div>

                <div className={styles1.iconBlock}>
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    className={`${styles1.skillIcon} ${styles1.bootstrap}`}
                    title="BOOTSTRAP"
                  />
                </div>
              </div>
            <p className={styles.fitnessHeaderDesc}>
              I am a front-end software developer with 5+ years of experience of building
              web and mobile applications using a variety of tools and have
              exposure to the entire gamut of software development lifecycle
              working on areas ranging all the way from data modelling to UI
              design and release management
            </p>
            <br />
            <div className={styles1.resumeContainer}>
            <h4>Looking for candidates for a rewarding career opportunity?</h4>
            <Image src="/work/arrow.svg" alt="SVG Image" width={200} height={200} className={styles1.arrowSvg}/>

              <a download href="/work/aviral-resume.pdf" className={styles1.downloadResumeBtn}>
              Download Resume
              </a>
            </div>

          </div>
          <hr className={styles.hr} />
          <h2  className={styles1.sectionHeader}>
            Projects
            <FontAwesomeIcon className={styles.projectIcons} icon={faOsi} />
          </h2>

          <div className={styles.projectsWrapper}>
            <div className={styles.eachProject}>
              <h3 className={styles.projectName}>
                <a
                  href="https://www.peppercontent.io/features/measure-content-roi/"
                  target="_blank"
                  className={styles.projectLink}
                >
                  content - SEO
                </a>
              </h3>
              <div className={styles.projectDesc}>
                Worked on various tools and aspects of seo in a content such as
                , seo analytics, seo ranking, keyword portfolios. A user can
                enter and keyword topic or description for its content, and the
                tool helped them with improving their seo by giving suggestions
                regarding various aspects for that keyword.{" "}
              </div>
            </div>
            <div className={styles.eachProject}>
              <h3 className={styles.projectName}>
                <a
                  href="https://www.xto10x.com/peoplecues/performance-management"
                  target="_blank"
                  className={styles.projectLink}
                >
                  10x Performance
                </a>
              </h3>
              <div className={styles.projectDesc}>
                Worked on a tool that enables people to become their best selves
                and outperform. Work involves requirements analysis, data
                modelling, technology exploration and selection, software
                design, construction, testing, and release.I worked mainly on
                developing micro-frontends with React using Typescript for the
                frontend.
              </div>
            </div>
            <div className={styles.eachProject}>
              <h3 className={styles.projectName}>
                <a
                  href="https://www.senseforth.ai/aware"
                  target="_blank"
                  className={styles.projectLink}
                >
                  A.ware
                </a>
              </h3>
              <div className={styles.projectDesc}>
                A.ware is a Revolutionary AI Chabot Platform with deep domain
                knowledge to build Intelligent Chatbots for any Business. It is
                built on six different engines that use innovative core
                concepts. It works across a range of locations - cloud,
                on-premise or even a hybrid of the two. It is embedded with
                various pre-built connectors to different channels.
              </div>
            </div>
          </div>
          <hr className={styles.hr} />
          <h2  className={styles1.sectionHeader}>
          Innovative Explorations
            <FontAwesomeIcon className={styles.projectIcons} icon={faLaptop} />
          </h2>
          <div className={styles.projectsGrid}>
            <a
              href="https://iamaaviral.github.io/minesweeper/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={styles.projectName}>
                <p className={styles.projectLink}>Minesweeper</p>
              </h3>
              <p>
                Minesweeper is a logic puzzle which features a grid of clickable
                squares, with hidden &quot;mines`&quot; scattered throughout the
                board.
              </p>
            </a>
            <a
              href="https://iamaaviral.github.io/page-builder/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={styles.projectName}>
                <p className={styles.projectLink}>Page Builder</p>
              </h3>
              <p>
                A simple drag&drop page with basic customizable elements to
                create your form.
              </p>
            </a>
            <a
              href="https://songify-vert.vercel.app/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={styles.projectName}>
                <p className={styles.projectLink}>Songify</p>
              </h3>
              <p>
                A simple music player with audio controls and mini playlist.
              </p>
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Work;
