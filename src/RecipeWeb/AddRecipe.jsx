import React from "react";
import styles from "./css/AddRecipe.module.css";

class AddRecipe extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			ingredients: "",
			instructions: "",
		}

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	    this.setState({ [event.target.name]: event.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
	    alert(`We received your recipe ${this.state.title}! We will handle this ASAP!`);
	}

	render () {
		return (
			<div id={styles.add_recipe_page}>
				<h3>Add Recipe</h3>
				<form className={styles.add_form}  onSubmit={this.handleSubmit}>
					<ul className={styles.form_item}>
						<li>
							<label className={styles.to_send}>
								Choose Category:
								<select>
									<option value ="appetizer">Appetizer</option>
									<option value ="main">Main Course</option>
									<option value ="soup">Soup</option>
									<option value="dessert">Dessert</option>
								</select>
							</label>
						</li>
						<li>
							<label className={styles.to_send}>	
								Choose Food Country:
								<select>
									<option value ="Italy">Italy</option>
									<option value ="Japan">Japan</option>
									<option value ="India">India</option>
									<option value="China">China</option>
									<option value ="France">France</option>
									<option value="Vietnam">Vietnam</option>
									<option value ="Other">Other</option>


								</select>
							</label>
						</li>
						<li>
							<label className={styles.to_send}>	
							  Title:
							  <input required="required" value={this.state.title} onChange={this.handleChange} name="title"/>
							</label>
						</li>
						<li>
							<label className={styles.to_send}>	
							  Ingredients List:
							  <textarea required="required" value={this.state.ingredients} onChange={this.handleChange} name="ingredients"/>
							</label>
						</li>
						<li>
							<label className={styles.to_send}>	
							  Instructions:
							  <textarea required="required" value={this.state.instructions} onChange={this.handleChange} name="instructions"/>
							</label>
						</li>
						<li>			
							<input type="submit" value="Send" />
						</li>
					</ul>
				</form>			
			</div>
		)
	}
}


export default AddRecipe;