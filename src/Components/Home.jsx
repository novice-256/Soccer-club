import React from 'react';
import "../App.css"
import BannerCarousel from './BannerCarousel'
import Highlights from './Highlights'
import LatestNews from './LatestNews'
import About from './About';
import "../Styles/sectionNames.css"

import TopPlayersAndTeams from './TopPlayersAndTeams';

export default function Home() {
  return (
    <div className='container-fluid'>
      <BannerCarousel/>
      <div class="parent">
<div class="child top-left"></div>
<div class="child top-right"></div>
<div class="child bottom-left"></div>
<div class="child bottom-right"></div>
<h1>Upcoming Matches</h1>
</div>
<div className='row justify-content-center w-100 mt-6'style={{backgroundImage:'url(images/Banner1.jpg)',height:'500px'}}>

      <About/>
</div>    
      <Highlights/>
      <div class="parent">
<div class="child top-left"></div>
<div class="child top-right"></div>
<div class="child bottom-left"></div>
<div class="child bottom-right"></div>
<h1>Latest News</h1>
</div>
      <LatestNews/>
<div class="parent">
<div class="child top-left"></div>
<div class="child top-right"></div>
<div class="child bottom-left"></div>
<div class="child bottom-right"></div>
<h1>Top Rankings</h1>
</div>
     <div className='row justify-content-center w-100'style={{backgroundImage:'url(Assets/Images/b4.jpg)'}}>

    <TopPlayersAndTeams/>
    
     </div>
    </div>
  )
}
