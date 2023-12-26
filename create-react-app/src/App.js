
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import moon from './Artboard 1.png';
import logo from './keshab.png';
import keshab from './Acerlogo.png';
function App() {
  return (
    <BrowserRouter>
      <div>
        <section className="sec">
          <div className="container">
            <div className="header">
              <div className="phone-number">
                <p>Phone: 01-5347058</p>
              </div>
              <div className="navigation">
                <ul>
                  <li><Link className='a' to="/">About</Link></li>
                  <li><Link to="/design">Design & Print</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/digital">Digital Promotion</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <img src={moon} alt="" className="moon-image" />
              <img src={keshab} alt="" className="background-image" />
              <img src={logo} alt="" className="overlay-image" />
            </div>
          </div>
        </section>
        <div className="title">
          <h1>My Works</h1>
        </div>
        <section className="split">
          <div className="screen">
            <div className="content">
              <h2>UI</h2>
              <p>Lorem ipsum dolor sit, amet consectetuus, asperiores labore corporis ex laboriosam!</p>
            </div>
          </div>
          <div className="screen">
            <div className="content">
              <h2>Graphic Design</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Biam odio corporis ex laboriosam!</p>
            </div>
          </div>
          <div className="screen">
            <div className="content">
              <h2>Web Design</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. aperiam odio corporis ex laboriosam!</p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <img src={logo} alt="" />
          <p>Gyaneshwor, Kathmandu, Nepal</p>
          <p>&copy; 2023 Altter Keshab Pvt Limited. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
