import React from 'react';
import { Link } from 'react-router-dom';

const appetizerParams = require('../data/appetizer.json');
const mainParams = require('../data/main.json');
const dessertParams = require('../data/dessert.json');
const soupParams = require('../data/soup.json');

export const RecipePage  = ({head, paras}) => {
	return(
		<div>

			<div>
				{paras.map(para =>(
					<div key={para.id}>
						<Link  to={`/AllCategories/${head}/${para.id}`}>
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