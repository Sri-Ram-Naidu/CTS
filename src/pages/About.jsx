import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="About Me!" subtitle="This page is all about me and my work!"/>
        <div className="container">
        <div className="rows">
        <div className="col-md-9">
          <h2>About</h2>
                   <p>EVP Rajeswari Marriage Palace belongs to with EVP group of associations, founded by Shri E.V.Perummal Sami Reddy, which has an assorted extend of organizations for example Amusement Park, Construction, Commercial Activities, Real Estate, Education Institutions, Import & Export, Rent, Hotel and Agricultural features.</p>
          <p> It has an aggregate land store of 2300 acres spread over different areas in Chennai, Delhi and Madurai. The corporate office of the association is located at the prime area in Chennai covering 10 lakh square feet. The association has executed 60 projects in the divisions of Real Estate, Construction and Education. 
            </p>
            <p>EVP Group of Companies vision is to put resources into Education, Housing Projects for abject individuals, Amusement park,  Various ventures to assist the underprivileged, Social actions and Education, AyurVeda, Siddha, Yoga, After care home and clinic, Cultural systems, Theater, Indoor and Outdoor diversions and Film City
         </p> 
         <p>
         Contact us @ </p>
         <p>

7871655555</p><p>

9445011111</p><p>

9444403848</p><p>

0443551039</p><p>

(or) mail us at evprajeswari@gmail.com


           </p>
         
         
         <div className="col-md-4">
      
         </div>
         
         
         </div>




         
         </div></div>
        <Footer />
      </div>
    );
  }
}

export default About
