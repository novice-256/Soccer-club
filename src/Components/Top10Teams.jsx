import React, { useEffect, useState } from 'react';
import "../Styles/Teams.css";

export default function Top10Teams() {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetch("soccer.json")
      .then(res => res.json())
      .then(data => setAppData(data.top_10_teams)) 
  }, []);

  return (
    <div className='TopTeams p-25' style={{padding: "2rem"}}>
      <h1>Top 10 Teams</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Total Scores</th>
          </tr>
        </thead>
        <tbody>
          {appData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="flag_name">
                <img className="flag1" src={item.flag_image} alt={item.name} /> {item.name}
              </td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
