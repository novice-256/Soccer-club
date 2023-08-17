import React from 'react';
import "../Styles/Teams.css"

export default function TeamPlayers(props) {
return (
  <div className='TeamPlayers'>
    <div className="col-7">
          <div className="player_info ">
          <img style={{height: "200px", width: "200px", paddingLeft: '20%'}} src={props.images} alt=""/>
          <h6 className="player_name text-center"><strong>Name:</strong> {props.name}</h6>
          <h6 className='text-center'><strong>age:</strong> {props.age}</h6>
          <h6 className='text-center'><strong>nationality:</strong> {props.nationality}</h6>
          <h6 className='text-center'><strong>position:</strong> {props.position}</h6>
          <h6 className='text-center'><strong>Bios:</strong> <br/>{props.biography}</h6>
          <h3 className="static_heading text-center">Stastistics</h3>
          <h6 className="static text-center"><strong>Matches:</strong> {props.matches}</h6>
          <h6 className="static text-center"><strong>Goals:</strong> {props.goals}</h6>
          <h6 className="static text-center"><strong>Assists:</strong> {props.assists}</h6>
          <h6 className="static text-center"><strong>Yellow Card:</strong> {props.yellow_card}</h6>
          <h6 className="static text-center"><strong>Red Card:</strong> {props.red_card}</h6>    
      </div>
      </div>
  </div>
)
}
