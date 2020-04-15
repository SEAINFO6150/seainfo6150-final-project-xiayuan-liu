import React from 'react';
import styles from "./css/Help.module.css";

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
	    alert(`Dear ${this.state.username}! We got your problem and will contact you ASAP!`);
    }

    render(){
        return (

            <div id={styles.add_recipe_page}>
                <h3>Contact Us</h3>
   
                    <form className={styles.add_form} onSubmit={this.handleSubmit}>
                    <ul className={styles.form_item}>
                        <li>
                        <label className={styles.to_send}>
                            Name:
                            <input required="required" type="name" value={this.state.username} onChange={this.handleChange} name="username" placeholder="enter your name" maxLength="10"/>
                        </label>
                        </li>
                        <li>
                        <label className={styles.to_send}>
                            E-mail:
                            <input required="required" type="email" name="email" placeholder="enter your email" />
                        </label>
                        </li>
                        <li>
                        <label className={styles.to_send}>
                            Your Gender:
                            <select>
                                <option value ="male">male</option>
                                <option value ="female">female</option>
                                <option value="secret">secret</option>	
							</select>
                        </label>
                        </li>
                        <li>
                        <label className={styles.to_send}>
                            Your Age group:  
                            <select>
                                <option value ="children">under 18</option>
                                <option value ="young">18 - 40</option>
                                <option value="old"> > 41</option>
						    </select>
                        </label>
                        </li>
                        <li>
                        <label className={styles.to_send}>
                            Your Questions<br/>
                            <textarea  value={this.state.advice} onChange={this.handleChange} name="advice" rows="10" cols="30">Plese write down what you want to tell us here!</textarea>
                        </label>
                        </li>
                        <li>
                        <input type="submit" value="Add" />
                        </li>
                        </ul>
                    </form>
                
            </div>
        );
    }
};

export default Help;


