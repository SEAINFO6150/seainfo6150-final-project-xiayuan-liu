import React from 'react';
import styles from "./css/About.module.css";

const About = (props) => {
    return (
        <div className={styles.about}> 
            <div className={styles.words}>
            <h1>About Us</h1>
            <p> 
               Our goal is to help people from different places to <br />
               Share Recipe Enjoy Life
            </p>
            </div>
            <img className={styles.img} src="https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO-Images-2020/Health/03Mar/CR-Health-Inlinehero%20coronavirus%20and%20food%200320" alt="logo" title="logo"></img>
        </div>

    );
};

export default About;