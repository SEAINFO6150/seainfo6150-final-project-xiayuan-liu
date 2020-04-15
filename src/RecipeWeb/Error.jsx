import React from 'react';
import error from "../data/error.png"
import styles from "./css/Error.module.css";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className={styles.body}>
            <Link className={styles.link_blue} to="/">
            <img className={styles.img} src={error} alt="404" title="404"></img>
        
			</Link>

        </div>
    )
}

export default Error;
