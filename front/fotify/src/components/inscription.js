import React, { Component } from 'react'
import Nav from './nav'
import axios from "axios";
import{Link} from 'react-router-dom';

export default class Inscription extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            emailR:"",
            passwordR:"",
            firstnameR:"",
            lastnameR:"",
            pictureR:""
             
        }
    }


    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });}

    register = () => {
        const { firstnameR,lastnameR,pictureR, emailR, passwordR } = this.state;
        axios
          .post("http://localhost:5000/register", {
            firstname: firstnameR,
            email: emailR,
            password: passwordR,
            lastname:lastnameR,
            picture:pictureR
          })
          .then(res => console.log(res))
          .catch(err => alert('something is missing or wrong'));
      };

      


    
    render() {
        return (
            <div className="incri-page">
                <Nav/>
                
                <div className="inscri">
                    <form method="post">
                        <h2 className="inscri-page-title">Sign up Form</h2>
                        <input className="form-input" type="text" name="firstnameR" placeholder="First Name" onChange={this.handleChange} />
                        <input className="form-input" type="text" name="lastnameR" placeholder="Last Name"onChange={this.handleChange} />
                        <input className="form-input" type="email"  pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*" name="emailR" placeholder="Email" onChange={this.handleChange}/>
                        <input className="form-input" type="text" name="pictureR" placeholder="profil picture"onChange={this.handleChange} />
                        <input className="form-input" type="password" name="passwordR" placeholder="Password"onChange={this.handleChange} />
                       
                       <Link to="/login"><button className="inscri-btn" type="button" onClick={this.register} value="Register">Sign Up</button>
                       </Link></form>
                </div>
                
            </div>
        )
    }
}
