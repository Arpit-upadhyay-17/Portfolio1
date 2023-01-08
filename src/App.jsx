import { Routes , Route , useLocation } from 'react-router-dom';
import './App.css';
import Main from './Cmp/Main';
// import Navbar from './Cmp/Navbar';
import Blog from './Cmp/pages/Blog';
import ContactUS from './Cmp/pages/ContactUS';
import Education from './Cmp/pages/Education';
import Intro from './Cmp/pages/Intro';
import Projects from './Cmp/pages/Projects';
import Skills from './Cmp/pages/Skills';
import Training from './Cmp/pages/Training';
import { AnimatePresence } from "framer-motion"
import NotFound from './Cmp/pages/NotFound';
// import Footer from './Cmp/Footer';



function App() {

  const Loaction = useLocation();
  // console.log(Loaction);

  return (
    <>
      {/* <Navbar /> */}
      <br />
      <AnimatePresence>
      <Routes location={Loaction} key={Loaction.pathname} >
        <Route path='/'  element={ <Main />  }  >
          <Route index element={ <Intro /> } />
          <Route path='Intro' element={ <Intro /> }  />
          <Route path='Education' element={ <Education /> }  />
          <Route path='Skills' element={ <Skills /> }  />
          <Route path='Training' element={ <Training /> }  />
          <Route path='Projects' element={ <Projects />}  />
        </Route> 
        <Route path="/blogs" element={ <Blog /> }  /> 
        <Route path="/contact-us" element={ <ContactUS /> }  /> 
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      </AnimatePresence>
      <br />
      {/* <Footer /> */}
    </>
  );
}

export default App;
