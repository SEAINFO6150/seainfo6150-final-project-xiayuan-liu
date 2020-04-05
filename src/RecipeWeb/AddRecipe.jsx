import React from "react";

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
	    alert(`We received your recipe ${this.state.title}!`);
	}

	render () {
		return (
			<div>
				<h3>Add Recipe</h3>
				<form  onSubmit={this.handleSubmit}>
					<ul>
						<li>
							<label>
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
							<label>
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
							<label>
							  Title:
							  <input required="required" value={this.state.title} onChange={this.handleChange} name="title"/>
							</label>
						</li>
						<li>
							<label>
							  Ingredients List:
							  <textarea required="required" value={this.state.ingredients} onChange={this.handleChange} name="ingredients"/>
							</label>
						</li>
						<li>
							<label>
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