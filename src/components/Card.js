import { useState } from "react";

function Card({tour,removeTour}){
    const {name,price,info,image,id}=tour;//Destructuring object
    const[readmore,setReadmore]= useState(false);
    const description = readmore?info:`${info.substring(0,200)}....`;
    // toggles between readmore and showless
    function readmoreHandler(){
        setReadmore(prev=>!prev);
    }
    
   
    return (
 
        <div className="card">
            <img src={image} className="image" alt="places"/>
            <div className="tour-info">
            
                 <div className="tour-details">
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>
                 </div>
                 <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore?`....Show less`:`Readmore`}
                </span>
                 </div>
            
                 </div>
            
                 <button className="btn-red" onClick={()=> removeTour(id)}>
                Not Interested
                 </button>
        </div>
        

    );
}
export default Card;