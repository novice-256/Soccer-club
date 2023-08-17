import React from 'react';
import "../Styles/Teams.css";

export default function TeamDetails(props) {
    

    return (
     
                
                  <>
                  
                        
                        
                            <tr className='align-center'>
                                <td className='my-auto'> <img src={props.images} className='img img-thumbnail img-rounded rounded-circle' height={'20%'} width={'30%'}   alt={props.name} /></td>
                                <td className='my-auto'>{props.name}</td>
                                <td className='my-auto'>{props.nationality}</td>
                                <td className='my-auto'>{props.statistics}</td>
                   <td className='my-auto'>
                    <button type="btn" className='btn btn-primary btn-sm' onClick={props.handleShowDetails} >
                    See Profile</button></td> 
                            </tr>
                    
                   
       
                  </>
    );
}
