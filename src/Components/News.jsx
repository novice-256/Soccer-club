import React, { useContext, useEffect, useState } from 'react';
import "../Styles/News.css"
import { MyThemeContext } from '../Context/ThemeContext';

export default function News() {
  const [{ theme, isDark }, toggleTheme] = useContext(MyThemeContext);
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then(res => res.json())
      .then(data => setAppData(data)) 
  }, []);

  return (
    <div className='News px-5' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <h1 className='py-5 text-center'>News</h1>
      <div className="news-sec row" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        {appData.map((item, index) => (
          <div key={index} className={`products-area py-2 col-md-4 col-sm-12 ${!isDark ? "lightshadow" : "darkshadow"}`}>
            <img className="image-area" src={item.image} alt="Images"/>
              <i className="col-md-2 d-sm-none d-md-block float-right fa-solid fa-share-nodes" style={{ color: "#0c0d0d;" }}></i>
            <div className="description-area d-flex flex-wrap col-md-12">
              <h3 className="col-md-12 title-area">{item.title}</h3>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
