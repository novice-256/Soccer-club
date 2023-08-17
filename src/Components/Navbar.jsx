import React, { useContext, useState } from 'react';
import '../Styles/Navbar.css';
import { MyThemeContext } from '../Context/ThemeContext';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
  const [{ theme, isDark }, toggleTheme] = useContext(MyThemeContext);
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const scrollToSiteMap = () => {
    const siteMapSection = document.getElementById('Site_map');
    siteMapSection.scrollIntoView({ behavior: 'smooth' });
 };



const navstyle = { backgroundColor: isDark ? theme.backgroundColor : '#204466', color: theme.color }
  return (
    <div className='nav-wrapper '>
      <nav >
      <div className="cus-navbar" style={navstyle}>
        <div className="col-sm-12 logo d-flex justify-content-between">
            <h1 className="logo">
              <span>Soccer</span>Verse
            </h1>
            <div className='darkicon'>
            {!isDark ? 
                <i className="fas fa-moon" onClick={toggleTheme}></i>
                :
                <i className="fa-regular fa-sun" onClick={toggleTheme}></i>
            }
            </div>
          </div>
          <div className={`icon ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
            <i className="fa-solid fa-bars" style={{ color: '#68bff2' }}></i>
          </div>
          <div className={`col-sm-12 nav-items ${isNavOpen ? 'open' : ''}`}>
                <a><Link to="/">Home</Link></a>
                <a><Link to="/Matches">Matches</Link></a>
                {/* <a><Link to="/Teams">Teams</Link></a> */}
                <NavDropdown title="Teams" id="basic-nav-dropdown" style={{ backgroundColor: isDark ? theme.backgroundColor : '#204466', color: theme.color }}>
              <NavDropdown.Item><Link to="/Teams" style={{ color: "black" }}>All Teams</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Top10Teams" style={{ color: "black" }}>Top 10 Teams</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Top10Players" style={{ color: "black" }}>Top 10 Players</Link></NavDropdown.Item>
            </NavDropdown>
                <a><Link to="/News">News</Link></a>
                <a><Link to="/gallery">Gallery</Link></a>
                <a><Link to="/Contactus">ContactUs</Link></a>
                <a onClick={scrollToSiteMap}><Link to="/Sitemap">Sitemap</Link></a>
                <div class="search-box">
                    <input type="text" placeholder="Search..."/>
                    <button><i class="fas fa-search"></i></button>
                </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
