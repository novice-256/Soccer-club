import React, { useContext } from 'react';
import "../Styles/LatestNews.css"
import { MyThemeContext } from '../Context/ThemeContext';

export default function LatestNews() {
    const [{ theme, isDark }] = useContext(MyThemeContext);
  return (
    <div className='LatestNews' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
       <h2>Latest News</h2>
            {/* <div className="latest_news d-flex col-12">
                <div className={!isDark ? "lightshadow" : "darkshadow"} style={{display: "flex"}}>
                        <img src="Assets/Images/news1.avif" alt="" />
                            <div className='flex-wrap'>
                                <h3 className="img_txt">RONALDO NETS CLUTCH PENALTY TO SEND AL NASSR INTO FIRST ARAB CUP FINAL</h3>
                                <p className="">Free kicks have become Cristiano Ronaldo’s trademark but he’s not too shabby on penalties, either.</p>
                            </div>
                </div>
            </div> */}
            <div className="container">
            <div className={`row ${!isDark ? "lightshadow" : "darkshadow"}`}>
            <h1 className='text-center mt-4'>Soccer Information</h1>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    <h1 className='mt-1'>Soccerverse</h1>
                    <h4 className='mt-5'>RONALDO NETS CLUTCH PENALTY TO SEND AL NASSR INTO FIRST ARAB CUP FINAL</h4>
                    <p>Free kicks have become Cristiano Ronaldo’s trademark but he’s not too shabby on penalties, either.</p>
                </div>  
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <img height={"800px"} src="Assets/Images/news1.avif" alt="" />
                </div>
            </div>
        </div>
      

    <div className="latest_news col-12">
        <div className={!isDark ? "lightshadow" : "darkshadow"}>
            <img className="news_img" src="Assets/Images/news2.avif" alt=""/>
            <h3 className="img_txt">PL PREVIEWS: ANOTHER NEW ERA AT SPURS BUT UNCERTAINTY REMAINS</h3>
        </div>
        <div className={!isDark ? "lightshadow" : "darkshadow"}>
            <img className="news_img" src="../images/girl2.webp" alt=""/>
            <h3 className="img_txt">Charles: We pride ourselves on being resilient</h3>
        </div>
    </div>

    <div className="latest_news">
        <div className={!isDark ? "lightshadow" : "darkshadow"}>
            <img className="news_img" src="../images/girl3.webp" alt=""/>
            <h3 className="img_txt">Codina: When you fall, you get up - in football and life</h3>
        </div>

        <div className={!isDark ? "lightshadow" : "darkshadow"}>
            <img className="news_img" src="../images/girl4.webp" alt=""/>
            <h3 className="img_txt">Engrossing individual duels in the quarter-finals</h3>
        </div>
    </div>
    <h5>See all</h5>
    {/* <section className="container">
        <div className="row grid-work">
            <div className="child-x" id="grid1">
                <div className="img-class">
                    <img src="Assets/Images/news1.avif" alt="" height="462px" width="365px"/>
                </div>
                <div className="news-description">
                    <h3 className="news-title t1">RONALDO NETS CLUTCH PENALTY TO SEND AL NASSR INTO FIRST ARAB CUP FINAL
                    </h3>
                    <p className="news-para">Free kicks have become Cristiano Ronaldo’s trademark but he’s not too shabby on
                        penalties, either.</p>
                </div>
            </div>
            <div className="child" id="grid2">
                <div className="img-class">
                    <img src="Assets/Images/news2.avif" alt=""/>
                </div>
                <div className="news-description">
                    <h3 className="news-title t2">PL PREVIEWS: ANOTHER NEW ERA AT SPURS BUT UNCERTAINTY REMAINS</h3>
                </div>
            </div>
            <div className="child" id="grid3">
                <div className="img-class">
                    <img src="Assets/Images/news3.avif" alt=""/>
                </div>
                <div className="news-description">
                    <h3 className="news-title t2">KYLIAN MBAPPÉ WAS REMOVED FROM PSG'S MEDIA DAY AND OPEN SQUAD PICTURE</h3>
                </div>
            </div>

            <div className="child" id="grid4">
                <div className="img-class">
                    <img src="Assets/Images/news4.avif" alt=""/>
                </div>
                <div className="news-description">
                    <h3 className="news-title t2">FRANCK KESSIÉ COMPLETES THE SAUDI MOVE AT BARCELONA AFTER ONE SEASON</h3>
                </div>
            </div>
            <div className="child" id="grid5">
                <div className="img-class">
                    <img src="Assets/Images/news5.avif" alt=""/>
                </div>
                <div className="news-description">
                    <h3 className="news-title t2">BRENTFORD'S DAVID RAYA SET TO JOIN ARSENAL 'ON LOAN'</h3>
                </div>  
            </div>
                <p className="s1"><a href="#">See all</a></p>   
        </div>
    </section> */}
    </div>
  )
}
