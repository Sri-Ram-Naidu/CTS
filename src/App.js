import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Facilities from './pages/facilities.jsx';
import Locations from './pages/Locations.jsx';
import Services from './pages/Services.jsx';
import Login from './pages/login.jsx';
import Navbar from './components/Navbar'
class App extends React.Component {
    render() {
        return ( 

            <Router>

            <div >
            <Route exact path = "/" component = { Main }/>
            <Route path = "/home" component = { Home }/>
            <Route path = "/about" component = { About }/> 
            <Route path = "/contact" component = { Contact }/> 
            <Route path = "/location" component = { Locations }/>
            <Route path = "/facilities" component = { Facilities }/> 
            <Route path = "/services" component = { Services }/> 
            <Route path = "/login"component = { Login }/>
            </div>
            </Router>
          );
        }
    }

    // export default App;
    ReactDOM.render( < App / > , document.getElementById('root'));