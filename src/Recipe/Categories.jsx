import React from "react";
import { Link } from 'react-router-dom';

const allCategories = () => {
  return(
          <div>
            <h3>All Categories</h3>
            <div>
              <div >
                <div>
                  <a href="/AllCategories/appetizer" className={styles.now}>&nbsp;</a>
                  <span>See Appetizer</span>
                </div>

                <Link  className={styles.link} to="/AllCategories/appetizer" >
                  <div>Appetizer</div>
                </Link>
              </div>

              <div className={styles.individualCategory}>
                <div className={styles.divcss5}>
                  <img src={mainCourse} alt="mainCourse" title="mainCourse"></img>
                  <a href="/AllCategories/mainCourse" className={styles.now}>&nbsp;</a>
                  <span>See MainCourse</span>
                </div>
                <Link  className={styles.link} to="/AllCategories/mainCourse" >
                  <div>Main Course</div>
                </Link>
              </div>

              <div className={styles.individualCategory}>
                <div className={styles.divcss5}>
                  <img className={styles.img} src={dessert} alt="dessert" title="dessert"></img>
                  <a href="/AllCategories/dessert" className={styles.now}>&nbsp;</a>
                  <span>See Desserts</span>
                </div>
                <Link  className={styles.link} to="/AllCategories/dessert" >
                  <div>Desserts</div>
                </Link>
              </div>

            </div>
        </div>
  )
}

export default allCategories;
