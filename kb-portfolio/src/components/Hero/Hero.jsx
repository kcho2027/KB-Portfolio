import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kyoungbin</h1>
        <p className={styles.description}>
          I'm currently an undergrad student at the University of Illinois majoring in computer science. 
          My interest includes application development, natural language processing, and quantitative development.
        </p>
        <a href="mailto:ronaldc5@illinois.edu" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur}></div>
  </section>;
}
