import React from 'react';
import "../Styles/Teams.css";

export default function TeamDetails(props) {
    return (
        <tr className='align-center'>
            <td className='my-auto ' style={{width:'20px',height:'20px'}}>
                <img
                    src={props.images}
                    className='img img-thumbnail img-rounded rounded-circle'
                    height={'inherit'}
                    width={'inherit'} 
                    
                    alt={props.name}
                />
            </td>
            <td className='my-auto'>{props.name}</td>
            <td className='my-auto'>{props.nationality}</td>
            <td className='my-auto'>{props.statistics}</td>
            <td className='my-auto'>
                <button
                    type="btn"
                    className='btn btn-primary btn-sm'
                    onClick={props.handleShowDetails}
                >
                    See Profile
                </button>
            </td>
        </tr>
    );
}
