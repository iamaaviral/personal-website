import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faGlobe, faLocation, faMapPin } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <hr className={styles.hr}/>
            <div className={styles.footerInfo}>
                <div className={styles.contact}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.socialIcon} />
                    <a href="mailto:srivastavaaviral1@gmail.com">srivastavaaviral1@gmail.com</a>
                    <br />
                    <FontAwesomeIcon icon={faGlobe} className={styles.socialIcon} />
                    <a>+91-7073865049</a>
                </div>
                <div className={styles.location}>
                <FontAwesomeIcon icon={faMapPin}/> Currently located in <b>Bengaluru, India</b>
                </div>
            </div>
        </footer>
    )
}

export default Footer