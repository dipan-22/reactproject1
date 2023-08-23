import Card from "./Card";

function Tours({tours,removeTour}){
return(
<div className="Container">
    <div>
        <h2 className="title">Plan for tommorow</h2>
    </div>
    <div className="Cards">
        {
            tours.map(tour=> 
                <Card tour={tour} removeTour={removeTour} key={tour.id}/>
            )
        }
    </div>
</div>
);
}

export default Tours;