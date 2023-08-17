import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import ContactUs from './ContactUs';
import Footer from './Footer';
import Teams from './Teams';
import News from './News';
import Gallery from './Gallery';
import Matches from './Matches';
import Top10Teams from './Top10Teams';
import Top10Players from './Top10Players';
import Upcoming_Events from './Upcoming_Events';
import Past_events from './Past_events';
import Recent_Events from './Recent_Events';
import NewsAndEvents from './NewsAndEvents';

export default function MainApp() {
  return (
    <div>
        <Router>
                <Navbar/>
            <Routes>
                <Route exact path ="/" element={<Home />}/>
                <Route exact path ="/Matches" element={<Matches />}/>
                <Route exact path ="/Upcoming_Events" element={<Upcoming_Events />}/>
                <Route exact path ="/Past_events" element={<Past_events />}/>
                <Route exact path ="/Recent_events" element={<Recent_Events />}/>
                <Route exact path ="/Teams" element={<Teams />}/>
                <Route exact path ="/Top10Teams" element={<Top10Teams />}/>
                <Route exact path ="/Top10Players" element={<Top10Players />}/>
                <Route exact path ="/News" element={<NewsAndEvents />}/>
                <Route exact path ="/Gallery" element={<Gallery />}/>
                <Route exact path ="/ContactUs" element={<ContactUs />}/>
            </Routes>
                <Footer/>
      </Router>
    </div>
  )
}
