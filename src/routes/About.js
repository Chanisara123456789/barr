import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutI from "../assets/1.jpg";
import Footer from "../components/Footer";


function About(){
    return(
        <>
          <Navbar/>
        <Hero cName="hero-mid" heroImg={AboutI}  title = " Princess Charm School (2011)" btnClass="hide"
         />

        <Footer/>
        </>
    );
}

export default About;