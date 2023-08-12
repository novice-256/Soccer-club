import React from 'react';
import "../Styles/Matches.css"
import { Link } from 'react-router-dom';

export default function Matches() {
  return (
  
      <section className="about1">
        <div className=" py-5">
          <div className="row py-5 mt-5">
            <div className="h1">
              <h1 className="heading">UPCOMING TOURNAMENTS & EVENTS</h1>
              <p className="see">
                <Link to="/Upcoming_Events" style={{ color: "white", textDecoration: "none" }}>See All</Link>
              </p>

            </div>
            <div className="col-12">
              <div className="row py-3 mt-5">
                <div className="col-lg-4 col-sm-6">
                  <div className="thumbnail py-2">
                    <div className="img-container">
                      <div className="overflow-hidden">
                        <img height="250px" width="400px" src="Assets/Blue-Stars-FIFA-Youth-Cup-logo.webp" alt="" />
                      </div>
                      <p className="py-2">Blue Stars/Fifa Youth Cup 2023™</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="thumbnail py-2">
                    <div className="img-container">
                      <div className="overflow-hidden">
                        <img height="250px" width="400px" src="Assets/1301588873.webp" alt="" />
                      </div>
                      <p className="py-2">FIFA U-17 World Cup Indonesia 2023™</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="thumbnail py-2">
                    <div className="img-container">
                      <div className="overflow-hidden">
                        <img height="250px" width="400px" src="Assets/FIFA-AWARD.webp" alt="" />
                      </div>
                      <p className="py-2">FIFA Women's World cup Australia & New Zealand 2023™</p>
                    </div>
                  </div>
                </div>
                <div class="h1">
                    <h1 class="heading">RELIVE PAST TOURNAMENTS & EVENTS</h1>
                    <p class="see">
                        <Link to="/Past_Events" style={{color: "white", textDecoration: "none"}}>See All </Link>
                     </p>
                  </div>
                  <div class="col-12">
                      <div class="row py-3 mt-5">
                          <div class="col-lg-4 col-sm-6">
                              <div class="thumbnail py-2">
                                  <div class="img-container">
                                      <div class="overflow-hidden">
                                          <img height="250px" width="400px" src="Assets/Chelsea-v-Palmeiras-Final-FIFA-Club-World-Cup-UAE-2021.webp" alt="" />
                                      </div>
                                      <p class="py-2">FIFA Club World Cup UAE 2021 | Tournament Flim</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-4 col-sm-6">
                            <div class="thumbnail py-2">
                                <div class="img-container">
                                    <div class="overflow-hidden">
                                        <img height="250px" width="400px" src="Assets/FIFAPLS_OfficialFilms_FCWC2022_THUMB_00.webp" alt=""/>
                                    </div>
                                    <p class="py-2">FIFA Beach Soccer World cup™</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                          <div class="thumbnail py-2">
                              <div class="img-container">
                                  <div class="overflow-hidden">
                                      <img height="250px" width="400px" src="Assets/2014" alt="" />
                                  </div>
                                  <p class="py-2">FIFA Women's World cup Australia & New Zealand 2023™</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-sm-6">
                        <div class="thumbnail py-2">
                            <div class="img-container">
                                <div class="overflow-hidden">
                                    <img height="250px" width="400px" src="Assets/2018"  alt="" />
                                </div>
                                <p class="py-2">Dreams | The Official Flim of the 2018 FIFA World Cup™</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="h1">
                        <h1 class="heading">RECENT TOURNAMENTS & EVENTS</h1>
                        <p class="see">
                            <Link to="/Recent_Events" style={{color: "white", textDecoration: "none"}}>See All</Link>
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="row py-3 mt-5">
                            <div class="col-lg-4 col-sm-6">
                                <div class="thumbnail py-2">
                                    <div class="img-container">
                                        <div class="overflow-hidden">
                                            <img height="250px" width="400px" src="Assets/FIFAPLS_FWWC2023_Tournament-logo.webp" alt="" />
                                        </div>
                                        <p class="py-2">FIFA Women's World cup Australia & New Zealand 2023™</p>
                                    </div>
                                </div>
                            </div>
                          <div class="col-lg-4 col-sm-6">
                              <div class="thumbnail py-2">
                                  <div class="img-container">
                                      <div class="overflow-hidden">
                                          <img height="250px" width="400px" src="Assets/FIFA-AWARD.webp" alt="" />
                                      </div>
                                      <p class="py-2">The Best FIFA Football Awards™</p>
                                  </div>
                              </div>
                          </div>
                                <div class="col-lg-4 col-sm-6">
                                    <div class="thumbnail py-2">
                                        <div class="img-container">
                                            <div class="overflow-hidden">
                                                <img height="250px" width="400px" src="Assets/Real-Madrid-v-Al-Hilal-Final-FIFA-Club-World-Cup-Morocco-2022.webp  " alt="" />
                                            </div>
                                            <p class="py-2">FIFA Club World Cup Morocco 2022™</p>
                                        </div>
                                    </div>
                                </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="thumbnail py-2">
                                    <div class="img-container">
                                        <div class="overflow-hidden">
                                            <img height="250px" width="400px" src="Assets/fifa20arg" alt="" />
                                        </div>
                                        <p class="py-2">FIFA U-20 World Cup Argentina 2023™</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </section>
   
  );
}
