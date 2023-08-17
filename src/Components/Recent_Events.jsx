import React from 'react';
import "../Styles/Matches.css";
import { Link } from 'react-router-dom';

export default function Recent_Events() {
  return (
    <div className='Recent_Events'>
      <section className="about1">
        <div className="container py-5">
        <p className="back">
            <Link to="/Matches" style={{ fontSize: "larger", textDecoration: "none", color: "white" }}><i className="fa-solid fa-arrow-left"></i>back</Link>
          </p>
          <div className="row py-5 mt-5">
            <div>
              <h1 className="heading">RECENT TOURNAMENTS & EVENTS</h1>
            </div>
            <div className="col-lg-8 m-auto text-center">
            </div>

            <div className="row py-3">
              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/FIFAPLS_FWWC2023_Tournament-logo.webp" alt="" />
                    </div>
                    <p className="py-2">FIFA Women's World cup Australia & New Zealand 2023™</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/FIFA-AWARD.webp" alt="" style={{ height: "250px", width: "350px" }} />
                    </div>
                    <p className="py-2">The Best FIFA Football Awards™</p>  
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail  py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/Real-Madrid-v-Al-Hilal-Final-FIFA-Club-World-Cup-Morocco-2022.webp" alt="" height="250px" width="400px" /> 
                    </div>
                    <p className="py-2">FIFA Club World Cup Morocco 2022™</p>
                  </div>
                </div>
              </div> 

              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail  py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/Blue-Stars-FIFA-Youth-Cup-logo.webp" alt="" style={{ height: "250px", width: "350px" }} />
                    </div>
                    <p className="py-2">Blue Star/FIFA Youth Cup 2023™</p>  
                  </div>
                </div>
              </div>
            
              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail  py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/fifa20arg" alt="" height="250px" width="400px" /> 
                    </div>
                    <p className="py-2">FIFA U-20 World Cup Argentina 2023™</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail  py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022.webp" alt="" height="250px" width="400px" /> 
                    </div>
                    <p className="py-2">FIFA World Cup Qatar 2022™</p>
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
