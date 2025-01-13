import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Project";
import { MySkills } from './components/MySkills';
import About from './components/About';
import { Contact } from './components/Contact';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';

const App = ()=>{
  return(
      <>
          <Router>
              <NavBar/>
            <Routes>
                <Route path="/" element={<Banner/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skills" element={<MySkills/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
              
            </Routes>
          </Router>
      </>
  )
}

export default App;