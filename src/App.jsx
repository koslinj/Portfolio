import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import TechStack from './components/TechStack';

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <TechStack />
      <Projects />
      <section id="contact">
        <div className='grad h-52 mt-24 mb-96'>
          CONTACT
        </div>
      </section>
      <div className='h-64 mt-64'>FOOTER</div>
    </div>
  );
};

export default App;
