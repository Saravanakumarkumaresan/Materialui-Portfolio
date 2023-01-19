import { Footer } from "./Components/footer/Footer";
import { Home } from "./Components/home/Home";
import { Navbar } from "./Components/Navbar/Navbar";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Details } from "./Details/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
