import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import TechStack from './components/TechStack';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
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
