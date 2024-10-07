import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Project";

import { MySkills } from './components/MySkills';
import About from './components/About';
import { Contact } from './components/Contact';
//import { Footer } from './components/Footer';

function App() {
  return (
<>
    <NavBar />
    <Banner />
    <About/>
    <MySkills/>
    <Projects />
    <Contact/>
</>       
  );
}

export default App;