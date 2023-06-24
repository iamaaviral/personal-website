import Head from "next/head";

import Navbar from "./navbar";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOsi } from "@fortawesome/free-brands-svg-icons";
import { faLaptop, faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

const Projects = () => {
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
          <h2>Projects <FontAwesomeIcon className={styles.projectIcons} icon={faOsi}/></h2>
          <hr className={styles.hr} />
          <div className={styles.projectsWrapper}>
            <div className={styles.eachProject}>
              <h3 className={styles.projectName}>
                <a href="https://www.peppercontent.io/features/measure-content-roi/" target="_blank" className={styles.projectLink}>
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
                <a href="https://www.xto10x.com/peoplecues/performance-management" target="_blank" className={styles.projectLink}>
                  10x Performance
                </a>
              </h3>
              <div className={styles.projectDesc}>
                Worked on a tool that enables people to become their best selves and outperform.
                Work involves requirements analysis, data modelling, technology
                exploration and selection, software design, construction,
                testing, and release.I worked mainly on developing
                micro-frontends with React using Typescript for the frontend.
              </div>
            </div>
            <div className={styles.eachProject}>
              <h3 className={styles.projectName}>
                <a href="https://www.senseforth.ai/aware" target="_blank" className={styles.projectLink}>
                  A.ware
                </a>
              </h3>
              <div className={styles.projectDesc}>
                A.ware is a Revolutionary AI Chabot Platform with deep domain knowledge to build Intelligent Chatbots for any Business.
                It is built on six different engines that use innovative core concepts. It works across a range of locations - cloud, on-premise or even a hybrid of the two. It is embedded with various pre-built connectors to different channels.
              </div>
            </div>
          </div>
          <h2>Here are some other fun personal projects <FontAwesomeIcon className={styles.projectIcons} icon={faLaptop}/></h2>
          <hr className={styles.hr} />

          <div className={styles.grid}>
          <a
            href="https://iamaaviral.github.io/minesweeper/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={styles.projectName}>
                <a target="_blank" className={styles.projectLink}>
                  Minesweeper
                </a>
              </h3>
            <p>
            Minesweeper is a logic puzzle  which features a grid of clickable squares, with hidden &quot;mines`&quot; scattered throughout the board.
            </p>
          </a>
          <a
            href="https://iamaaviral.github.io/page-builder/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={styles.projectName}>
                <a target="_blank" className={styles.projectLink}>
                  Page Builder
                </a>
              </h3>
            <p>
              A simple drag&drop page with basic customizable elements to create your form.
            </p>
          </a>
          <a
            href="https://play-my-music.vercel.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={styles.projectName}>
                <a target="_blank" className={styles.projectLink}>
                  Play my music
                </a>
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

export default Projects;
