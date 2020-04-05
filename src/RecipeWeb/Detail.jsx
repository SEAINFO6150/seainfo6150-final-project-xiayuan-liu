import React from "react";

const appetizerParams = require('../data/appetizer.json');
const mainParams = require('../data/main.json');
const soupParams = require('../data/soup.json')
const dessertParams = require('../data/dessert.json');

export const Detail = ({item, back}) => {

    const ingredients = [];
    for(const [index,value] of item.ingredients.entries()){
        ingredients.push(
        <li key={index}>
            <label>
                <input type="checkbox" />
                <span></span>
                <span>{value}</span>
            </label>
        </li>);}

    const instructions = [];

    for(const [index, value] of item.directions.entries()){
        instructions.push(
        <li key={index}>
            <label>
                <input type="checkbox"/>
                <span ></span>
                <span>{value}</span>
            </label>
        </li>
    );}

    return(
        <div>
            <div>
                <h4>{item.name}</h4>
                <img src={item.image._url} alt={item.name}/>
                <h5>Ingredients</h5>
                <p>{ingredients}</p>
                <h5>Instructions</h5>
                <p>{instructions}</p>
            </div>
        </div>
    );
};

const Classfication = (props) =>{
    if (props.individual === "appetizer"){
        const item = appetizerParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
    }
    if (props.individual === "mainCourse"){
        const item = mainParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
    }
    if (props.individual === "soup"){
        const item = soupParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
    }
    if (props.individual === "dessert"){
        const item = dessertParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
    }
}


export default Classfication;