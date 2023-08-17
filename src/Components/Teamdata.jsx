import React, { useEffect, useState } from 'react';

export default function Teamdata() {
    const [appData, setappData]= useState([]);

    useEffect(()=>{
        fetch("data2.json")
        .then(res=>res.json())
        .then(data=>setappData(data.dosage_details))
    },[])
    console.log(appData);
  return (
    <div className='Teamsdata'>
      {appData.map((item)=>{
            return (
                <div className='dosagepat'>
                    <h5>Personal Details</h5><hr/>
                    <p>Patient_ID: {item.patient_ID}</p>
                    <p>Patient_name: {item.patient_name}</p>
                    <p>Contact Number: {item.contact_number}</p>
                    <p>Email: {item.email}</p>
                    <p>Consultant Name: {item.consultant}</p>
                    <h5>List of Prescribed Medications</h5><hr/>
                    <table>
                        <thead>
                            <tr>
                            <th>Medicine Name</th>
                            <th>Duration</th>
                            <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                        {item.recommended_medicines.map((medicine) => (
                                    <tr key={medicine.medicine_name}>
                                        <td>{medicine.medicine_name}</td>
                                        <td>{medicine.duration}</td>
                                        <td>{medicine.dosage_quantity}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )
        })}
    </div>
  )
}
