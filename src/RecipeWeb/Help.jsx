import React from 'react';

class Help extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            advice: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
	    alert(`Dear ${this.state.username}! We received your information, we will contact you soon!`);
    }

    render(){
        return (

            <div >
                <h3 >Contact Us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input required="required" type="name" value={this.state.username} onChange={this.handleChange} name="username" placeholder="enter your name" maxLength="10"/>
                        </label><br />
                        <label>
                            E-mail:
                            <input required="required" type="email" name="email" placeholder="enter your email" />
                        </label><br />
                        <label>
                            Your gender:<br />
                            <label>male<input type="radio" name="gender"/></label><br />
                            <label>female<input type="radio" name="gender"/></label><br />
                            <label>secret<input type="radio" name="gender"/></label>
                        </label><br />
                        <label>
                            Your Age group:  
                            <select>
                                <option value ="children">under 18</option>
                                <option value ="young">18 - 40</option>
                                <option value="old"> > 41</option>
						    </select>
                        </label><br />
                        <label>
                            Your Questions<br/>
                            <textarea value={this.state.advice} onChange={this.handleChange} name="advice" rows="10" cols="30">Plese write down what you want to tell us here!</textarea>
                        </label>
                        <br/>
                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
        );
    }
};

export default Help;


