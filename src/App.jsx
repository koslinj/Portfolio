import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import TechStack from './components/TechStack';

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Hobbies />
      <TechStack />
      <Projects />
      <Contact />
      <div className='h-64 mt-64'>FOOTER</div>
    </div>
  );
};

export default App;
