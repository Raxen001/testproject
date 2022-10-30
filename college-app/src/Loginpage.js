import React from "react";
import { ReactDOM } from "react";
import './Loginpage.css';
const Loginpage=()=>{
    return (
        <div id ="bg">
    <div className = "container">
        <div className="jumbotron" id = "jumbo">

            <div >
                <label className ="login" >Login</label>
    
            <div >
                <input type = "name"className="form-control" placeholder="Username" id ="user"/>
            </div>
      
                <div className="">
                    <input type ="password" className="form-control" placeholder="Password" id = "password"/>
                </div>

            </div>


        <div id ="check">
            <div className="form-check">
                <input className="form-check-input"  type="checkbox" />
                <label class="form-check-label" for="check">
                    Remember me
                </label>
            </div>
        </div>
    
            <div id ="forgot">
                <a href="">Forgot password?</a>
            </div>
        </div>
  
  </div>
  </div>
  
);
}
export default Loginpage;