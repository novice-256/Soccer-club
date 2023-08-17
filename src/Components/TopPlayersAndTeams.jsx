import "../Styles/topPlayers.css"

import React, { useState, useEffect } from 'react';


const TopPlayersAndTeams = () => {
  const [topPlayersData, setTopPlayersData] = useState([]);
  const [topTeamsData, setTopTeamsData] = useState([]);

  useEffect(() => {
    // Fetch top players data
    fetch('topPlayers.json')
      .then(response => response.json())
      .then(data => setTopPlayersData(data))
      .catch(error => console.error('Error fetching top players:', error));

    // Fetch top teams data
    fetch('topTeams.json')
      .then(response => response.json())
      .then(data => setTopTeamsData(data))
      .catch(error => console.error('Error fetching top teams:', error));
  }, []);

  return (
    <div className="row shadow shadow-lg my-4 " style={{opacity:'.9'}}>
      <div className="top-players bg-light shadow shadow-lg col mx-3 overflow-hidden shadow shadow-lg">
      <h2 className="section-heading my-4 py-3" style={{  color:" rgba(255, 255, 255, 0.253)",backgroundColor:'#204466'}}>Top 10 Players</h2>
        <table className="table table-hover table-striped  ">
          <thead >
            <tr >
              <th className="theme-color">Rank</th>
              <th className="">Player Name</th>
              <th className="">Team Name</th>
              <th className="">Total Goals</th>
            </tr>
          </thead>
          <tbody>
            {topPlayersData.map(player => (
              <tr key={player.rank}>
                <td>{player.rank}</td>
                <td>{player.playerName}</td>
                <td>{player.teamName}</td>
                <td>{player.totalGoals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="top-teams shadow shadow-lg bg-light col  mx-3 overflow-hidden shadow shadow-lg">
      <h2 className="section-heading my-4 py-3" style={{  color:" rgba(255, 255, 255, 0.253)",backgroundColor:'#204466'}}>Top 10 Teams</h2>

        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th className="">Rank</th>
              <th className="">Team Name</th>
              <th className="">Position</th>
            </tr>
          </thead>
          <tbody>
            {topTeamsData.map(team => (
              <tr key={team.rank}>
                <td>{team.rank}</td>
                <td>{team.teamName}</td>
                <td className="text-center">
                { team.position === 'up' ? <i class="fa-solid fa-sort-up text-success "></i> : <i class="fa-solid fa-sort-down text-danger "></i>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopPlayersAndTeams;
