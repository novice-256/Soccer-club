import React from 'react'
import { Link } from 'react-router-dom'

export default function Past_events() {
  return (
    <div className='Past_events'>
      <div className='Past_events'>
      <section className="about1">
        <div className="container py-5">
        <p className="back">
            <Link to="/Matches" style={{ fontSize: "larger", textDecoration: "none", color: "white" }}><i className="fa-solid fa-arrow-left"></i>back</Link>
          </p>
          <div className="row py-5 mt-5">
            <div>
              <h1 className="heading">RELIVE PAST TOURNAMENTS & EVENTS</h1>
            </div>
            <div className="col-lg-8 m-auto text-center"></div>
            <div className="row py-3">
              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/Chelsea-v-Palmeiras-Final-FIFA-Club-World-Cup-UAE-2021.webp" alt="" height="250px" width="400px" />
                    </div>
                    <p className="py-2">FIFA Club World Cup UAE 2021 | Tournament Film</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/FIFAPLS_OfficialFilms_FCWC2022_THUMB_00.webp" alt="" height="250px" width="400px" />
                    </div>
                    <p className="py-2">Tournament Film | FIFA Club World Cup Morocco 2022™</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/2014" alt="" height="250px" width="400px" />
                    </div>
                    <p className="py-2">Road to Marcana | The Official Film of the 2014 Fifa World Cup™</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/The-Best-2022_Live-Streaming_EN.webp" alt="" style={{ height: "250px" }} width="350px" />
                    </div>
                    <p className="py-2">The Best FIFA Football Awards™ 2022 | Replay</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/2015" alt="" height="250px" width="400px" />
                    </div>
                    <p className="py-2">The Story of the 2015 FIFA Women's World Cup™</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail py-2">
                  <div className="img-container">
                    <div className="overflow-hidden">
                      <img src="Assets/2018" alt="" height="250px" width="400px" />
                    </div>
                    <p className="py-2">Dreams | The Official Film of the 2018 FIFA World Cup™</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    /</div>
    </div>
  )
}
