import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Main extends Component {
  render() {  
    return (
      <div> 
        <Navbar />
        <Jumbotron title="Welcome" subtitle="Put something witty here!" />
        <div className="container">
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
