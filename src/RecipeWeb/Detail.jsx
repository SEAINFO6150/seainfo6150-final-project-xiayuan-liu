import React from "react";
import styles from "./css/Detail.module.css";

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
                <input type="checkbox" className={styles.cb}/>
                <span className={styles.cb}></span>
                <span className={styles.con}>{value}</span>
            </label>
        </li>);}

    const instructions = [];

    for(const [index, value] of item.directions.entries()){
        instructions.push(
        <li key={index}>
            <label>
            <input type="checkbox" className={styles.cb}/>
                <span className={styles.cb}></span>
                <span className={styles.con}>{value}</span>
            </label>
        </li>
    );}

    return(
        <div>
            <div className={styles.detailPage}>
                <h4>{item.name}</h4>
                <img className={styles.itemImage} src={item.image._url} alt={item.name}/>
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