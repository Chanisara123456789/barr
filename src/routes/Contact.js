import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutI from "../assets/5.jpg";
import Footer from "../components/Footer";


function Contact(){
    return(
        <>
         <Navbar/>
        <Hero cName="hero-mid" heroImg={AboutI}  title = " Barbie and the Three Musketeers (2009)" btnClass="hide"
         />
        </>
    );
}

export default Contact;