import React, { useContext } from 'react';
import "../Styles/CardTile.css"
import { MyThemeContext } from '../Context/ThemeContext';

export default function CardTile(props) {
    const [{ theme, isDark }] = useContext(MyThemeContext);
  return (
    <div className='CartTitle col-md-4 col-sm-6 col-lg-3' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className={` ${!isDark ? "lightshadow" : "darkshadow"}`} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <img src={props.flag_image} alt="Flag Image" className="card-img-top img-rounded border mx-auto d-flex"
             style={{width:'40%'}}/>
            <div className="card-body">
                <h3 className="cardtitle text-center my-2" >{props.name}</h3>
                <button onClick={props.handleClick} type={"button"} className="btn btn-outline-primary mx-auto my-3 d-block btn-sm  ">View Players</button>
            </div>
      </div>

    </div>
  )
}
