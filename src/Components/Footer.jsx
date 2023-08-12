import React, { useContext } from 'react';
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import { MyThemeContext } from '../Context/ThemeContext';

export default function Footer() {
  const [{ theme, isDark }] = useContext(MyThemeContext);
  const navstyle = { backgroundColor: isDark ? theme.backgroundColor : '#204466', color: theme.color }
  return (
    <footer id="footer" style={navstyle}>
      <div className="footer-top" style={navstyle}>
        <div className="container" style={navstyle}>
          <div className="row py-4">

            <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto" >
              <div className="footer-info">
              <h4 className="logo" style={{fontSize: '25px'}}>
              <span style={{fontSize: '50px'}}>Soccer</span>Verse
            </h4>
                <p className="mt-4">
                  A108 Adam Street <br />
                  NY 535022, USA<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
              </div>
            </div>

            <div id="Site_map" className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto footer-links m-4">
              <h4>Site Map</h4>
              <ul className="list-unstyled mt-4"  style={navstyle}>
                <li><a><Link to="/">Home</Link></a></li>
                <li><a><Link to="/Matches">Matches</Link></a></li>
                <li><a><Link to="/Teams">Teams</Link></a></li>
                <li><a><Link to="/News">News</Link></a></li>
                <li><a><Link to="/gallery">Gallery</Link></a></li>
                <li><a><Link to="/Contactus">ContactUs</Link></a></li>
               </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto m-4">
              <h4>Feedback</h4>
              <div className="p1">
                <input type="text" placeholder="Name" />
              </div>
              <div className="p1 py-2">
                <input type="text" placeholder="Email" />
              </div>
              <form>
                <textarea name="" id="area" cols="23" rows="2" placeholder="Enter your opinion"></textarea>
                <button className="btn0 mt-2 d-block mx-auto">Submit</button>
              </form>
            </div>

            <div className="col-lg-12 text-center">
              <div className="social-links mt-2 ">
                <a href="https://twitter.com/"><i className="fab fa-twitter m-1"></i></a>
                <a href="https://www.facebook.com/login/"><i className="fab fa-facebook m-1"></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram m-1"></i></a>
                <a href="https://pk.linkedin.com/"><i className="fab fa-linkedin m-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cp" style={navstyle}>
        <div className="container2 text-center py-3" style={navstyle}>
          <div className="copyright">
            &copy; Copyright <strong><span>Soccerverse</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            <strong>Designed by Tech Titans</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
