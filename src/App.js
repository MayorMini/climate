
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About';
import Contact from './Components/contact/contact';
// import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Contact/>
    </div>
  );
}

export default App;
