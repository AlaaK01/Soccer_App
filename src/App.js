import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Competitions from "./pages/Competitions";
import Matches from "./pages/Matches";
import Teams from "./pages/Teams";
import BookTicket from "./pages/BookTicket";
import Contact from "./pages/Contact";



function App() {
  

  return (
    <Router>
        <Header />
        
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/competitions"  element={<Competitions />}/>
          <Route path="/matches"  element={<Matches />}/>
          <Route path="/booktickets"  element={<BookTicket />}/>
          <Route path="/teams"  element={<Teams />}/>
          
          <Route path="/contactus"  element={<Contact />}/>
        
          
        </Routes>
  
        <Footer />
      </Router>
  )
}

export default App
