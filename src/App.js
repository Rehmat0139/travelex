import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./MainComponent/Home";
import NorthDetails from "./Pages/NorthDetails";
import MaldiveDetails from "./Pages/MaldiveDetails";
import SouthDetails from "./Pages/SouthDetails";
import GoaDetails from "./Pages/GoaDetails";
import SrilankaDetails from "./Pages/Srilanka";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/travelex" element={<Home />} />
          <Route path="/NorthIndia" element={<NorthDetails />} />
          <Route path="/Maldives" element={<MaldiveDetails />} />
          <Route path="/SouthDetails" element={<SouthDetails/>} />
          <Route path="/GoaDetails" element={<GoaDetails />} />
          <Route path="/SrilankaDetails" element={<SrilankaDetails/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
