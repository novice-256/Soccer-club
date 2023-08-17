import React, { useEffect, useState } from "react";
import "../Styles/Gallery.css";

export default function Gallery() {
    const [showData, setShowData] = useState([]);
    
    useEffect(() => {
        fetch("teams.json")
            .then(res => res.json())
            .then(data => setShowData(data)) 
    }, []);
    
    // return (
    //     <div className="Gallery ">
    //         <div className="fade-out">
    //             <div className="container ">
    //                 <div className="py-4 text-center mt-3">
    //                     <h1>GALLERY</h1>
    //                 </div>

    //                 <div className="row py-3">
    //                     <div className="col-lg-4">
    //                         {showData.map((item, index) => (
    //                             <div key={index}>
    //                                 <div className="thumbnail py-2">
    //                                     <div className="img-container">
    //                                         <img
    //                                             src={item.images}
    //                                             alt={item.name}
    //                                             className="img-fluid"
    //                                             style={{ Height: "20px", Width: "300px" }}
    //                                         />
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className="Gallery">
            <div className="container">
                <div className="py-4 text-center mt-3">
                    <h1>GALLERY</h1>
                    <div className="row py-3">
                        {showData.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="thumbnail py-2">
                                    <div className="img-container">
                                        <img
                                            src={item.images}
                                            alt={item.name}
                                            className="img-fluid"
                                            style={{ height: "400px", width: "400px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
}
