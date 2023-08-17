import React, { useContext } from 'react';
import "../Styles/CardTile.css"
import { MyThemeContext } from '../Context/ThemeContext';

export default function CardTile(props) {
    const [{ theme, isDark }] = useContext(MyThemeContext);
  return (
    <div className='CartTitle col-md-4 col-sm-6 col-lg-3' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className={` ${!isDark ? "lightshadow" : "darkshadow"}`} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <img src={props.flag_image} alt="Flag Image" className="card-img-top" />
            <div className="card-body">
                <h3 className="cardtitle mx-3 my-2">{props.name}</h3>
                <button onClick={props.handleClick} className="btn btn-primary mx-3 my-3">more Details</button>
            </div>
      </div>

    </div>
  )
}
