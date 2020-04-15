import React from "react";
import styles from "./css/Homepage.module.css";
import { Link } from 'react-router-dom';


const Homepage = () => {
	return (
		<div className={styles.homepage}>
			<div className={styles.container}>
			<Link to="/AllCategories" >
			<img className={styles.img} src="https://source.tastespirit.com/img/585be1aa1600002400bdf2a6.jpeg" alt="logo" title="logo"></img>
			</Link>
			</div>
		</div>
	);
}


export default Homepage;