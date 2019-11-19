import React, { Component } from 'react'
import Nav from './components/nav'
import "./style.css"
import Acceuil from './pages/Acceuil'
import {Route} from 'react-router-dom'
import Loginpage from './components/loginpage'
import Inscription from './components/inscription'
import Profile from './pages/profile'
import Gallerie from './components/gallerie'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './pages/search'



export default class App extends Component {
  
  
  render(){
  return (
    <div>
      
       <Route exact path="/" component={Acceuil} />
       <Route exact path="/login" component={Loginpage} />
       <Route exact path="/inscription" component={Inscription} />
       <Route exact  path="/users" component={Profile}       />
       <Route exact  path="/search" component={Search}       />
         
    </div>
  )
}}
