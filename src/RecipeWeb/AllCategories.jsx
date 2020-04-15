import React from "react";
import { Link } from 'react-router-dom';
import styles from "./css/AllCategories.module.css";


const allCategories = () => {
  return(
          <div className={styles.recipePage}>
            <h3>All Categories</h3>
            <div className={styles.allRecipes}>
              <div className={styles.individualRecipe}> 
                <Link className={styles.link} to="/AllCategories/appetizer" >
                  <img className={styles.img} src="https://d3eh3svpl1busq.cloudfront.net/lrAhixkSbTKLvbFjFReqBsFpqOayMRLK/assets/static/optimized/rev-781e267/wp-content/uploads/images/2019/11/cheeseball.jpg" alt="name" title="name"></img>
                  <div>Appetizer</div>
                </Link>
              </div>

              <div className={styles.individualRecipe}>  
                <Link className={styles.link} to="/AllCategories/mainCourse" >
                <img className={styles.img} src="https://images.media-allrecipes.com/userphotos/720x405/1254483.jpg" alt="name" title="name"></img>
                  <div>Main Course</div>
                </Link>
              </div>

              <div className={styles.individualRecipe}>  
                <Link className={styles.link} to="/AllCategories/soup" >
                <img className={styles.img} src="https://d3eh3svpl1busq.cloudfront.net/lrAhixkSbTKLvbFjFReqBsFpqOayMRLK/assets/static/optimized/rev-781e267/wp-content/uploads/images/2016/11/EasyPotatoLeekSoup5-2-700x1050.jpg" alt="name" title="name"></img>
                  <div>Soup</div>
                </Link>
              </div>

              <div className={styles.individualRecipe}>
                <Link className={styles.link} to="/AllCategories/dessert" >
                <img className={styles.img} src="https://images.media-allrecipes.com/userphotos/720x405/4536111.jpg" alt="name" title="name"></img>
                  <div>Desserts</div>
                </Link>
              </div>

            </div>
        </div>
  )
}

export default allCategories;
