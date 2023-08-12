import { useEffect, useState } from 'react';
import Event from './Event';
import SideNews from './SideNews';
import "../Styles/sectionNames.css"
 

function NewsAndEvents() {
  
  const [news , setNews] = useState([])
  const [events , setEvents] = useState([])

  useEffect(()=>{

    fetch('news.json')
    .then(res=>res.json())
    .then(data=>setNews(data))
  }
       ,[])
       useEffect(()=>{

        fetch('events.json')
        .then(res=>res.json())
        .then(data=>setEvents(data))
      }
           ,[])
  return (
    <div className="">
      {/* <MainApp/> */}
      <div class="row ">
{/* <!-- announcemnt section --> */}
        <div class="announcements-tile col-8 ">
        <div class="parent">
<div class="child top-left"></div>
<div class="child top-right"></div>
<div class="child bottom-left"></div>
<div class="child bottom-right"></div>
<h1>Latest Event News</h1>
</div>
      {
        
news.map((newsItem)=>
 ( <Event
  img={newsItem.image}
  title ={newsItem.title}
  details={newsItem.details}

  />)
)
      }</div>
    <div class="col-4 border border-light " style={{right:'0',top:"5%"}}>


{
        
        events.map((eventItem)=>
         ( <SideNews
          eveDate={eventItem.eventDate}
          event={eventItem.title}
          desc={eventItem.description}
        
        
          />)
        )
              }
     </div>

    </div>
    </div>
  );
}

export default NewsAndEvents;

