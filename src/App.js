import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import allCategories from './RecipeWeb/AllCategories';
import Homepage from './RecipeWeb/Homepage.jsx';
import AddRecipe from './RecipeWeb/AddRecipe.jsx';
import Classfication from './RecipeWeb/Detail';
import Help from './RecipeWeb/Help.jsx';
import About from './RecipeWeb/About.jsx';
import IndividualPage from './RecipeWeb/RecipePage';
import styles from './App.module.css';
import Error from './RecipeWeb/Error.jsx';


function App() {
  return (
    <Router>
      <header>
          <h1>Delicious Recipe</h1>
          <ul className={styles.nav}>
            <li>
              <Link className={styles.link_color} to="/">Home</Link>
            </li>
            <li>
              <Link className={styles.link_color} to="/AllCategories">Categories</Link>
            </li>
            <li>
              <Link className={styles.link_color}  to="/AddRecipe">Add Recipe</Link>
            </li>
            <li>
              <Link className={styles.link_color}   to="/Help">Help</Link>
            </li>
            <li>
              <Link className={styles.link_color}  to="/About">About</Link>
            </li>
          </ul>
      </header>
 
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/AllCategories" exact component={allCategories} />
        <Route path ="/AddRecipe" exact component = {AddRecipe}/>
        <Route path="/Help" component={Help} />
        <Route path="/About" component={About} />
        <Route
          path="/AllCategories/:individual"
          exact
          render={({ match }) => (
            <IndividualPage
              individual={match.params.individual}
            />
          )}
        />
        <Route
          path="/AllCategories/:individual/:info"
          exact
          render={({ match }) => (
            <Classfication
              individual={match.params.individual}
              info={match.params.info}
            />
          )}
        />

        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;


