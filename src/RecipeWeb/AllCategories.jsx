import React from "react";
import { Link } from 'react-router-dom';

const allCategories = () => {
  return(
          <div >
            <h3>All Categories</h3>
            <div >
              <div>

                <Link to="/AllCategories/appetizer" >
                  <div>Appetizer</div>
                </Link>
              </div>

              <div>  
                <Link to="/AllCategories/mainCourse" >
                  <div>Main Course</div>
                </Link>
              </div>

              <div>  
                <Link to="/AllCategories/soup" >
                  <div>Soup</div>
                </Link>
              </div>

              <div >
                <Link to="/AllCategories/dessert" >
                  <div>Desserts</div>
                </Link>
              </div>

            </div>
        </div>
  )
}

export default allCategories;
