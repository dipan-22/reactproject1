import { useState } from "react";
import data from './data';
import Tours from "./components/Tours";



const App = () => {
  const [tours,setTours]=useState(data);
function removeTour(id){
  //fitering the old objects based on id
  const newTours=tours.filter(tour=> tour.id!==id);
  setTours(newTours);
}
if(tours.length===0)
{
  return(
    <div className="refresh">
      <h2>No tours to show</h2>
      <button  className="btn-white"onClick={()=>setTours(data)}>Refresh</button>
    </div>
  );
  
  
}
  return <div className="App">
    
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>;
};

export default App;
