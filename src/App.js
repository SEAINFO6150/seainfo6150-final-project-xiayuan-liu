import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import allCategories from './RecipeWeb/AllCategories';
import Homepage from './RecipeWeb/Homepage.jsx';
import AddRecipe from './RecipeWeb/AddRecipe.jsx';
import Classfication from './RecipeWeb/Detail';
import Help from './RecipeWeb/Help.jsx';
import About from './RecipeWeb/About.jsx';
import IndividualPage from './RecipeWeb/RecipePage';


function App() {
  return (
    <Router>
      <header>
          <h1>Delicious Recipe</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AllCategories">Categories</Link>
            </li>
            <li>
              <Link to="/AddRecipe">Add Recipe</Link>
            </li>
            <li>
              <Link  to="/Help">Help</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
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


