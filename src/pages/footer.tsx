import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <hr className={styles.hr}/>
            <div className={styles.footerInfo}>
                <div className={styles.contact}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.socialIcon} />
                    <a href="mailto:srivastavaaviral1@gmail.com">srivastavaaviral1@gmail.com</a>
                    <br />
                    <FontAwesomeIcon icon={faPhone} className={styles.socialIcon} />
                    <p style={{display: "inline", marginLeft: "8px"}}>+91-7073865049</p>
                </div>
                <div className={styles.location}>
                <FontAwesomeIcon icon={faMapPin}/>  <b>Bengaluru, India</b>
                </div>
            </div>
        </footer>
    )
}

export default Footer