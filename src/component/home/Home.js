import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render(){
        return (
            <div>
                <h1>Home</h1>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                </li>
                <li>
                  <Link to="/contactus">Topics</Link>
                </li>
                <li>
                <Link to="/services">Services</Link>
                </li>
            </ul>
        
            </div>
        )
    }
}

export default Home;