import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                <a href="mailto:ronaldc5@illinois.edu">ronaldc5@illinois.edu</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/kyoungbin-cho-9239a2286/">linkedin.com/Kyoungbin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                <a href="https://github.com/kcho2027">github.com/Kyoungbin</a>
            </li>
        </ul>
    </footer>
  )
}
