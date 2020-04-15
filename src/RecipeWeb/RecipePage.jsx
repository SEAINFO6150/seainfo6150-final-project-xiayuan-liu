import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./css/RecipePage.module.css";

const appetizerParams = require('../data/appetizer.json');
const mainParams = require('../data/main.json');
const dessertParams = require('../data/dessert.json');
const soupParams = require('../data/soup.json');

export const RecipePage  = ({head, paras}) => {
	return(
		<div className={styles.recipePage}>

			<div className={styles.allRecipes}>
				{paras.map(para =>(
					<div className={styles.individualRecipe} key={para.id}>
						<Link  className={styles.link} to={`/AllCategories/${head}/${para.id}`}>
						<img className={styles.img} src={para.image._url} alt="name" title="name"></img>
						<div>{para.name}</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

const IndividualPage = (props) => {
	if (props.individual === "appetizer"){
		return <RecipePage head={props.individual} paras={appetizerParams}/>
	}
	if (props.individual === "mainCourse"){
		return <RecipePage head={props.individual} paras={mainParams}/>
	}

	if (props.individual === "soup"){
		return <RecipePage head={props.individual} paras={soupParams}/>
	}	

	if (props.individual === "dessert"){
		return <RecipePage head={props.individual} paras={dessertParams}/>
	}	
}


export default IndividualPage;