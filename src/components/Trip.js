import"./TripStyles.css"
import TripData from "./TripData"
import Trip1 from"../assets/5.jpg"
import Trip2 from"../assets/6.jpg"
import Trip3 from"../assets/7.jpg"

function Trip(){
    return(
        <div className="trip">
          <h1>Recent Trips</h1>  
          <p>You can discover unique
            destinations using Google Maps. </p>
            <div className="Tripcard">
                <TripData
                image={Trip1}
                heading = "Delancy Devin"
                text="Lady Royal Delancy Devin is a 
                character of Barbie: Princess Charm School. 
                She is voiced by Brittney Wilson. Delancy is a 
                student at Princess Charm School, and at the end
                 of the movie, she becomes
                 Princess Sophia's Lady Royal."
                />

            <TripData
                image={Trip2}
                heading = "Dame Devin"
                text="Dame Devin is the main antagonist in Barbie: Princess Charm School. 
                She is voiced by Nicole  Dame Devin is a teacher at
                Princess Charm School who tries to live out her
                 royal dreams to rule 
                Gardania through her daughter, Delancy."
                />


            <TripData
                image={Trip3}
                heading = "Princess Isla "
                text="Princess Isla is a character in Barbie: Princess Charm School. 
                She is voiced by Shannon Chan-Kent. 
                Isla attends the school with her classmates Blair and Hadley, 
                and her sprite is Harmony."
                />
             </div>
        </div>
    );

}

export default Trip;