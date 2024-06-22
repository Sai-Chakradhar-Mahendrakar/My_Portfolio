import About from "../components/About";
import ContactMe from "../components/ContactMe";
import EducationTimeline from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";

export default function Index(){
    return (
        <>
            <Navbar/>
            <HeroPage/>
            <About/>
            <Experience/>
            <Project/> 
            <Skills/>
            <EducationTimeline/>
            <ContactMe/>
            <Footer/>
        </>
    );
}