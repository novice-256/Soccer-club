import React from 'react';
import "../Styles/Matches.css"
import { Link } from 'react-router-dom'

export default function Upcoming_Events() {
  return (
    <div className='Upcoming_Events'>
      <section className="about1">
        <div className="container py-5"> 
        <p className="back">
            <Link to="/Matches" style={{ fontSize: "larger", textDecoration: "none", color: "white" }}><i className="fa-solid fa-arrow-left"></i>back</Link>
          </p>
          <div className="row py-5 mt-5">
            <div className="col-12">
              <h1 className="heading">UPCOMING TOURNAMENTS & EVENTS</h1>
              <div className="row py-3">
                            <div className="col-lg-4 col-sm-6">
                            <div className="thumbnail py-2">
                                <div className="img-container">
                                <div className="overflow-hidden">
                                    <img src="Assets/Blue-Stars-FIFA-Youth-Cup-logo.webp" alt="" height="250px" width="400px" />
                                </div>
                                <p className="py-2">Blue Stars/Fifa Youth Cup 2023™</p>
                                </div>
                            </div>
                            </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="thumbnail py-2">
                                <div className="img-container">
                                    <div className="overflow-hidden">
                                    <img src="Assets/1301588873.webp" alt="" height="250px;" width="350px" />
                                    </div>
                                    <p className="py-2">FIFA U-17 World Cup Indonesia 2023™</p>  
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="thumbnail  py-2">
                            <div className="img-container">
                                <div className="overflow-hidden">
                                <img src="Assets/FIFA-AWARD.webp" alt="" height="250px" width="400px"/> 
                                </div>
                                <p className="py-2">The Best FIFA Football Awards™</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-sm-6">
                        <div className="thumbnail  py-2">
                            <div className="img-container">
                            <div className="overflow-hidden">
                                <img src="Assets/fifabeach" alt="" height="250px" width="400px" /> 
                            </div>
                                <p className="py-2">FIFA Beach Soccer World cup™</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="thumbnail  py-2">
                            <div className="img-container">
                                <div  className="overflow-hidden">
                                <img src="Assets/Olympics-Paris-2024-Logo.webp" alt="" height="250px" width="400px" /> 
                                </div>
                                <p className="py-2">Olympic Football Tournament Paris 2024™</p>
                            </div>
                        </div>
                    </div> 
                <div className="col-lg-4 col-sm-6">
                    <div className="thumbnail  py-2">
                        <div className="img-container">
                        <div className="overflow-hidden">
                            <img src="Assets/FIFA-Futsal-World-Cup-Colombia-2016-Trophies.webp" alt="" height="250px" width="400px" />
                            <p className="py-2">FIFA Futsal World cup Uzbekistan 2024™</p>
                        </div>
                        </div>
                    </div>  
                </div>
    </div>
        </div>
        </div>
        </div>
    </section>
       
    </div>
  )
}
