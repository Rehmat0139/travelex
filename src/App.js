// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Section from './Components/Section';
// import Carousel2 from './Components/Carousel2';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Banner/>
      <Cards/>
      {/* <Carousel2/> */}
      <Section/>
     <Footer/>
      </>
    </div>
  );
}

export default App;
