import React, { useContext, useEffect, useState } from 'react';
import "../Styles/Teams.css";
import { MyThemeContext } from '../Context/ThemeContext';


export default function Top10Players() {
    const [{ theme}] = useContext(MyThemeContext);
    const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetch("soccer.json")
      .then(res => res.json())
      .then(data => setAppData(data.top_10_players)) 
  }, []);
  return (
    <div className='Top10Players' style={{padding: "2rem" , backgroundColor: theme.backgroundColor, color: theme.color}} >
    <h1>Top10Players</h1>
    <table className="table table-hover" style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Image</th>
          <th>Name</th>
          <th>Goals</th>
        </tr>
      </thead>
      <tbody>
        {appData.map((item, index) => (
          <tr key={index}>
            <td>{item.position}</td>
            <td><img className="img-rounded" style={{height: "50px"}} src={item.flag_image} alt={item.name} /></td>
            <td>{item.name}</td>
            <td>{item.goals}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
