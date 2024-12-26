import React from 'react'
import { getImageUrl } from '../../utils';

import styles from "./About.module.css"
export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="me sitting with a laptop"
        className={styles.aboutImage}></img>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"></img>
            <div className={styles.aboutItemText}>
                <h3>Quantative Developer</h3>
                <p>I'm a quantative developer with experience in working with the low-latency systems and real time data analysis</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon"></img>
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I have experience developing fast and optimized back-end systems and APIs</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"></img>
            <div className={styles.aboutItemText}>
                <h3>Machine Learning Engineer</h3>
                <p>I have worked with data cleaning, training the model, testing the models to build a reliable machine learning model</p>
            </div>
            </li>
        </ul>
    </div>
  </section>;

}
