import Mountain1 from"../assets/11.jpg";
import Mountain2 from"../assets/10.jpg";
import Mountain3 from"../assets/1.jpg";
import Mountain4 from"../assets/2.jpg"; /*เปลี่ยนรูป*/
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return(
        <div className="destination">
        <h1>Barbie film series</h1>  
        <p>The plot follows Blair Willows, a poor girl living in the kingdom of Gardania, who wins an annual 
            lottery to attend a prestigious school where girls can train to become princesses or royal ladies. 
            As Blair learns the ways  of a proper princess, she uncovers the mystery behind the kingdom's 
            missing heiress to the throne.</p>
        
            <DestinationData
                className="first-des"

            heading="Barbie: Princess Charm School"
            text =" Barbie film series, the plot follows
            Blair Willows, a poor girl living in the 
            kingdom of Gardania, who wins an annual lottery 
            to attend a prestigious school where girls can
            train to become princesses or royal ladies. 
            As Blair learns the ways of a proper princess,
            she uncovers the mystery behind the kingdom's 
            missing heiress to the throne."
            img1={Mountain1}
            img2={Mountain2}
            />

            <DestinationData
            className="first-des-reverse"
            heading="Barbie: Barbie and the Diamond Castle" /*หัวข้อเรื่อง*/
            text =" Two best friends, Liana and Alexa, embark on a journey to find the Diamond 
            Castle! With the help of music, the girls overcome challenges 
            that show friendship is the true treasure." /*เนื้อเรื่อง*/
            img1={Mountain3}
            img2={Mountain4}

            />



        </div>
    );
};


export default Destination;