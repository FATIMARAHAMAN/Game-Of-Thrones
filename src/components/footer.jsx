import React,{useState,useEffect} from "react";
// import {useSelector, useDispatch} from "react-redux";



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
const  Footer =()=> {
    const [login,setLogInfo]=useState({
        name:"",
        organization:"",
        position:"",
        phone:"",
        email:"", 
        
        error_name:1,
        error_organization:1,
        error_position:1,
        error_phone:1,
        error_email:1, 
    
        err:'0',
        // authorized:
      });


   

        return (
        <React.Fragment>
Footer ======================================================================================================
</React.Fragment>
        
        
        )
    

  
}

export default Footer;