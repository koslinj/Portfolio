import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="aboutme">
        <div className='grad h-52 mt-24'>
          <h2>About me:</h2>
        </div>
      </section>
      <section id="about">
        <div className='grad h-52 mt-24'>
          ABOUT
        </div>
      </section>
      <section id="contact">
        <div className='grad h-52 mt-24'>
          CONTACT
        </div>
      </section>
      <div className='h-64 mt-64'>FOOTER</div>
    </div>
  );
};

export default App;
