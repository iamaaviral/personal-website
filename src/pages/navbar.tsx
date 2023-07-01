import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={`${styles.container} ${styles.clearfix}`}>
        <ul className={`${styles.menu} ${styles.pullLeft}`}>
          <li>
            <Link
              href="/"
              className={`${styles.routeLink} ${
                router.pathname === "/" ? styles.active : ""
              }`}
              aria-label="Link to Home page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${styles.routeLink} ${
                router.pathname === "/projects" ? styles.active : ""
              }`}
              aria-label="Link to Projects page"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/fitness"
              className={`${styles.routeLink} ${
                router.pathname === "/fitness" ? styles.active : ""
              }`}
              aria-label="Link to Fitness page"
            >
              Fitness
            </Link>
          </li>
        </ul>
        <div className={`${styles.headerTools} ${styles.pullRight}`}>
          <Link
            href="https://www.linkedin.com/in/iamaaviral/"
            target="_blank"
            className={`${styles.socialWrapper} ${styles.linkedin}`}
            aria-label="Link to my linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
          </Link>
          <Link
            href="https://www.instagram.com/iamaaviral/"
            target="_blank"
            className={`${styles.socialWrapper} ${styles.instagram}`}
            aria-label="Link to my instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
          </Link>
          <Link
            href="https://www.facebook.com/aviral.srivastava3/"
            target="_blank"
            className={`${styles.socialWrapper} ${styles.facebook}`}
            aria-label="Link to my facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
          </Link>
          <Link
            href="https://www.twitter.com/iamaaviral/"
            target="_blank"
            className={`${styles.socialWrapper} ${styles.twitter}`}
            aria-label="Link to my twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
          </Link>
          <Link
            href="https://www.github.com/iamaaviral/"
            target="_blank"
            className={`${styles.socialWrapper} ${styles.github}`}
            aria-label="Link to my github"
          >
            <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
