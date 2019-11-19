import React, { Component } from 'react'
import Nav from '../components/nav'
import{ connect } from "react-redux"
import {getusers} from '../actions/action'
import axios from "axios";
import Footer from '../components/footer';
import{Link} from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             recherche:"",
            
            
        }
        
    }
    componentDidMount = () => {
this.props.getusers()
      
      };
     
      handleChange=(e)=>{
        this.setState({
          recherche: e.target.value,
          
        })} 
    
    render() {
      const usersphoto = this.props.users.map(el => el.photo);
     
      // const aaa=usersphoto.filter(data=>(data.name.includes(this.state.recherche)))
      // const picss= usersphoto.filter(el=>el.includes({name:this.state.recherche}))
        return (
            <div className="search-page">
                <Nav/> 
                <div className="search-bar">
                   <div className="search-zone"><input className="input"  type="text" placeholder="search" onChange={this.handleChange}></input></div>
                   <div className="all-photos">

                   
                   {this.props.users.map(el=>el.photo.filter(elem=>elem.name.includes(this.state.recherche)).map(el=>


                    <div className="cadre">
                      <img className="pic-posted"src={el.src}></img>
                      <h5 className="pic-title">{el.name}</h5>
                   </div>))}</div>
                    
                  
                </div>
                <Footer/>
            </div>
        )
    }
}



const MapStateToProps = state => ({ ...state });
export default connect(
  MapStateToProps,
  { getusers }
)(Search);
