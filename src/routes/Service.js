import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutI from "../assets/3.jpg";
import Footer from "../components/Footer";





function Service(){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-mid" heroImg={AboutI}  title = "Barbie and the Diamond Castle (2008)" btnClass="hide"
         />
        <Footer/>
        </>
    );
}

export default Service;