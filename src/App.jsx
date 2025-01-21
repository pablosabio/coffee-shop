import "./App.css";
import Header from "./Header";
import Div1 from "./Div1";
import Blog from "./Blog";
import Footer from "./Footer";
import Shipping from "./context/Shipping";
import PrivatePolicy from "./context/PrivatePolicy";
import Terms from "./context/Terms";
import Return from "./context/Return";
import NewCollection from "./components/NewCollection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section_Exploring from "./Sections/Section_Exploring";
import Next_Exploring_Our_Unique from "./Sections/Next_Exploring_Our_Unique";

const App = () => {
  return (
    <>
  <Header/>
  <Div1/>

    <div className="app-container">
      <Section_Exploring/>
      <Next_Exploring_Our_Unique/>
  <Blog></Blog>
    </div>
    <Router>
      <div>
        <Routes>
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy-policy" element={<PrivatePolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return" element={<Return />} />
          <Route path="/" element={<NewCollection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
    
    </>

  );
};

export default App;

