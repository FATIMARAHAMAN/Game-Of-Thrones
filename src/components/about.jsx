import React,{useState,useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";



import  {vendors} from "../actions/vendors";
// import '../assets/css/bootstrap.min.css';
// import '../assets/css/styleN.css';

// import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  useHistory ,
  useLocation,
  useParams,
  withRouter
  }from 'react-router-dom';
const  About =(props)=> {
    

      useEffect(()=>{

        console.log(props);
        
        },[props.selectedMode])



           
const vendor = useSelector((state) => state.vendorReducer);
   

        return (
        <React.Fragment>
<div>
      <h1> About</h1>
  <p>NAME:  {vendor.data.name}</p>  
  <p>REGION:  {vendor.data.region}</p>
  <p>ALIASES: {vendor.data.aliases[0]}</p>  
    
    </div>
</React.Fragment>
        
        
        )
    

  
}

export default About;