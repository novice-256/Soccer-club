import React, { useContext } from 'react';
import "../Styles/ContactUs.css"
import { MyThemeContext } from '../Context/ThemeContext';

export default function ContactUs() {
    const [{ theme, isDark }] = useContext(MyThemeContext);
    const navstyle = { backgroundColor: isDark ? theme.backgroundColor : '#204466', color: theme.color }
  return (
    <div className='Contactus' style={navstyle} >
      <section className="contact">
  <div className="content">
    <h2>Contact us</h2>
    <h3>SoccerVerse</h3>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 col-md-6"> 
        <div className="contactinfo mr-4 mt-5">
          <div className="box">
            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Address</h3>
              <p>KARACHI</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Phone</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Email</h3>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-8 ">
        <div className="contactform ">
          <form>
            <h2>Send Message to Us</h2>
            <div className="inputbox">
              <span>Full Name</span>
              <input type="text" name="" required="required"/>
            </div>
            <div className="inputbox">
              <span>Email</span>
              <input type="text" name="" required="required"/>
            </div>
            <div className="inputbox">
              <span>Message</span>
              <input type="text" name="" required="required"/>
            </div>
            <div className="inputbox">
              <input type="submit" name="" value="Send"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
