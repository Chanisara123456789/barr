import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import DestinationData from "../components/DestinationData";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://i.pinimg.com/564x/97/65/80/976580e4d080da44f2140ae239bca563.jpg"
         title = "Hello"
         text =" You are our family."
         buttonText="Travel plan to our world"
         url="/"
         btnClass="show"
         />
         <Destination/>
         <trip/>
         <Footer/>
        </>
    );
}

export default Home;