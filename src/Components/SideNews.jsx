import React from 'react'

export default function SideNews(props) {
  return (
    <div>{/* <!-- news and letters --> */}
        <br/><br/><br/>
        <div class="shadow-sm">
    
            <h4 class=" border-bottom p-2 text-capitalize
             ">news and events</h4>
           
               <span > <strong class="text-light bg-success px-2 ">
                   {props.eveDate}</strong>
                <i class="badge bg-danger">New</i>
            </span>
       
                <a href="" class="text-decoration-none">
                    <li >
                   {props.event}</li></a>
                  <p class="mx-2 event-desc"><em>{props.desc}
                </em> </p>
           
        </div>
        
        {/* <!-- news and letters end --> */}
    </div>
  )
}
