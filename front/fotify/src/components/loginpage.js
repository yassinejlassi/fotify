import React, { Component } from 'react'
import Nav from './nav'
import axios from "axios";
import {connect} from 'react-redux'
import {getusers} from '../actions/action'
import{Link} from 'react-router-dom';


class Loginpage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",   
        };      
}
handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
};
login = () => {
    const { email, password } = this.state;
    axios
      .post("http://localhost:5000/login", { email, password })
      .then(res => {
        console.log(res.data.user);
        localStorage.setItem("token", res.data.token);
        // this.props.getusers(res.data.user)
        
        this.props.history.push('/users')
      })
      .catch(err => alert("please check your informations"));
  };
  logout = () => {
    localStorage.removeItem("token");
  };
  configtoken = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    
 

    if (token) {
      config.headers["Authorization"] = token;
    }
    // const config = { headers: { common: { Authorization: token } } };
    return config;
  };
  componentDidMount() {
    
    console.log(this.configtoken());
    axios
      .get("http://localhost:5000/current", this.configtoken())
      .then(res =>  this.props.getusers(res.data))
      .catch(err => console.log(err.response.data));
  }
    render() {
        return (
            <div>
                <Nav/>
                
    <div className="login">
        <form method="post">
            <h2 className="signup-page-title">Login Form</h2>
            
            <input className="form-input" type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
            <input className="form-input" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
          
          {/* <Link to="/profile"> */}
           <button className="page-login-btn" type="button"onClick={this.login} value="login">Log In</button>
           {/* </Link> */}
           <a href="/inscription" className="signup">Create an Account</a></form>
    </div>


            </div>
        )
    }
}

export default connect (null,{getusers})(Loginpage)