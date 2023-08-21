import './App.css';
import Footer from './components/footer/Footer';
import Navbaar from './components/header/Navbaar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbaar/Newnav'
import SIgnUp from './components/signup_signin/SIgnUp';
import Sign_in from './components/signup_signin/Sign_in';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <>
    <Navbaar/>
    <Newnav/>
    <Routes>
      <Route path="/"  element={<Maincomp/> } />
      <Route path="/login"  element={<Sign_in/> } />
      <Route path="/register"  element={<SIgnUp/> } />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
