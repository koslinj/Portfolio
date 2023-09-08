import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import { useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
    useLayoutEffect(() => {
        ScrollSmoother.create({
            smooth: 1 // how long (in seconds) it takes to "catch up" to the native scroll position
        });
    }, []);

    return (
        <div id="smooth-content" className='absolute top-0'>
            <Navbar />
            <Home />
            <AboutMe />
            <Hobbies />
            <TechStack />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
