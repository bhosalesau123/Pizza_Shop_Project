import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";


function App() {
  return (
<>
<BrowserRouter>
<TopBar/>
<NavBar/>
<Routes>
  <Route>
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/policy" element={<Policy />} />


  </Route>
</Routes>
</BrowserRouter>

</>   
  );
}

export default App;
