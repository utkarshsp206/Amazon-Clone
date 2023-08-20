import './App.css';
import Footer from './components/footer/Footer';
import Navbaar from './components/header/Navbaar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbaar/Newnav'


function App() {
  return (
    <>
    <Navbaar/>
    <Newnav/>
    <Maincomp/>
    <Footer/>
    </>
  );
}

export default App;
