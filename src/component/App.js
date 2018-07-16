import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import Home from "./home/Home";
import ContactUs from "./contactus/ContactUs";
import Services from "./services/Services";
import AboutUs from "./aboutus/AboutUs";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
class App extends Component {
    render(){
        return (
            // <div>
            //     <Router>
            //         <div>            
            //             <Route  exact path="/" component={Home} />
            //             <Route  path="/aboutus" Component={AboutUs} />
            //             <Route  path="/contactus" Component={ContactUs} />
            //             <Route  path="/home" Component={Home} />
            //             <Route  path="/services" Component={Services} />
            //         </div>
            //     </Router>
            // </div>
            <div>
            <Header />
            <Footer />
            </div>
        )
    }
}

export default App;