import React from 'react';
import "../Styles/Teams.css";
import TeamsDataMount from './TeamsDataMount';

export default function Teams() {

    return (
        <div className='Teams d-flex row'>
            <div className='filterdiv col-12'>
                <h1>Filter Div</h1>
            </div>
            <div className='col-sm-12 teamssub'>
                <TeamsDataMount/>
    
            </div>
        </div>
    );
}
