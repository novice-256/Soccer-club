import React, { useEffect, useState } from 'react';
import "../Styles/Teams.css";
import CardTile from './CardTile';
import TeamDetails from './TeamDetails';
import TeamPlayers from './TeamPlayers';


export default function TeamsDataMount() {
    const [appData, setAppData] = useState([]);
    const [showData, setShowData] = useState([]);
    const [showTeam, setShowTeam] = useState(true);
    const [selected, setSelected] = useState('France');
    const [playersDetail,setPlayersDetail ] = useState([]);

    function loadTeamDetails(name) {
        setShowTeam(false );
        setSelected(name)
    }

    useEffect(() => {
        fetch("soccer.json")
            .then(res => res.json())
            .then(data => setAppData(data.top_10_teams)) 
    }, []);
    useEffect(() => {
        fetch("teams.json")
            .then(res => res.json())
            .then(data => setShowData(data)
                
            ) 
    }, []);
    function showPlayerDetails(id){
        // console.log(id)
        // console.log(showData[id].id ===id);
        const selectedPlayer =showData[id]
        const statistics = selectedPlayer.statistics[0]
        console.log(selectedPlayer)
        setPlayersDetail(<TeamPlayers
            age={selectedPlayer.age}
            nationality={selectedPlayer.nationality}
            position={selectedPlayer.position}
            biography={selectedPlayer.biography}
            matches={statistics.matches}
            goals={statistics.goals}
            assists={statistics.assists}
            yellow_card={statistics.yellow_card}
            red_card={statistics.red_card}
        />)
        }

    function goBack() {
        setShowTeam(true);
        setSelected(null);
    }
    const [asc , setAsc] = useState(true)
 
function  sortByNum(property) {
  const sortedArray = [...showData]
  console.log(sortedArray)
   if(asc){

     sortedArray.sort((a, b) => b.statistics[0][property] - a.statistics[0][property])
     setShowData(sortedArray)
     setAsc(!asc)
    }else{
      sortedArray.sort((a,b)=> a.statistics[0][property]- b.statistics[0][property])
      setShowData(sortedArray)
     setAsc(!asc)


    }
  }
  function  sortByAlph() {
    const sortedArray = [...showData]
    console.log(sortedArray,"sorted")
     if(asc){
  
      sortedArray.sort((a, b) => a.name.localeCompare(b.name))
      setShowData(sortedArray)
       setAsc(!asc)
      }else{
        sortedArray.sort((a, b) => b.name.localeCompare(a.name))
        setShowData(sortedArray)
       setAsc(!asc)
  
  
      }
    }
    
  return (
    <div className='TeamDataMount d-flex row'>
      <div className='main-div col-sm-6 col-md-9 col-9 d-flex flex-wrap'>
                { showTeam && 
                 appData.map(item => (
                        <CardTile
                            
                            flag_image={item.flag_image}
                            name={item.name}
                            handleClick={()=>loadTeamDetails(item.name)}
                        />
                    ))
                 } 
                <div className='TeamDetails d-flex flex-wrap'>
                    <div className='teamhead'>
                    <button className='btn btn-primary'>
                        <i className="fas fa-arrow-left" onClick={() => goBack()}>Back</i></button> 
                        {/* <h1>{props.id}</h1>  */}
</div>
<div className='teamplayers'>
    <h1>{selected}</h1>
             <table className='table'>
                     <thead className="thead">
                        <tr>
                            <th>Image</th>
                            <th onClick={sortByAlph} className='d-flex position-relative'>
                                Name
                            <i class="fa-solid fa-sort-up position-absolute" style={{right:'0'}}></i>
                            <i class="fa-solid fa-sort-down position-absolute" style={{right:'0'}}></i>
                            </th>
                            <th>Nationality</th>
                            <th onClick={()=>sortByNum('matches')} className='d-flex position-relative'>
                            Matches
                            <i class="fa-solid fa-sort-up position-absolute" style={{right:'0'}}></i>
                            <i class="fa-solid fa-sort-down position-absolute" style={{right:'0'}}></i>

                            </th>
                            <th></th>

                         </tr>
                     </thead>
                     <tbody id="tableBody">
                     { !showTeam &&
                    showData.map((item)=>{

                        if (selected=== item.nationality){
                            const stats= item.statistics
                            console.log(stats[0].matches);
                            return(    <TeamDetails
                            images={item.images}
                            name={item.name}
                            nationality={item.nationality}
                            statistics={ [stats[0].matches]}
                            
                            handleShowDetails= {()=>showPlayerDetails(item.id)}
                        />
                        )
                        } 
                    })
                    }
                    </tbody>
    </table>
    </div>
</div>
                </div>
            <div className='right-div col-3'>
                <h1>Right Div</h1>
                    {
                    playersDetail
                    }
            </div>
    </div>
  )
}


// goBack={() => setShowTeam(true)}

