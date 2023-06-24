import styles from "@/styles/Home.module.css";
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
  import {
    faLaptopCode,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Kanit } from "next/font/google";
import Image from "next/image";

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
                  height={700}
                  width={500}
                />
              </div>

              <h1 className={`${styles.profileName} ${lato.className}`}>
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
                  <hr className={styles.hr} style={{width: "100px"}}/>
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
    )
}

export default Main