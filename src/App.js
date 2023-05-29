// import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Tours from './Components/Tours';
import Blogs from './Components/Blogs';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <>
      {/* <Navbar/> */}
      <Nav/>
      <Banner/>
      <Cards/>
      <Tours/>
      <Blogs/>
     <Footer/>
      </>
    </div>
  );
}

export default App;
